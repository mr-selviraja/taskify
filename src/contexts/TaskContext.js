import { createContext, useContext, useReducer, useEffect } from 'react';
import TaskReducer from '../reducers/TaskReducer';
import {
  db,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from '../config/firebaseConfig';
import { useFirestore } from '../hooks/useFirestore';

// Create context
const TaskContext = createContext();

// Create provider for the context
export const TaskContextProvider = ({ children }) => {
  // Extract firestore functions
  const { fetchCollection } = useFirestore();

  // State and Dispatcher to manage tasks
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  // Fetch tasks collection upon mounting
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get a reference to the tasks collection
        const tasksCollectionRef = await fetchCollection('tasks');

        // Dispatch an action to set the tasks
        dispatch({ type: 'SET_TASKS', tasks: tasksCollectionRef });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to add a task
  const addTask = async (title, details, remarks, isImportant) => {
    // Construct a task object
    const task = {
      title,
      isCompleted: false,
      details,
      remarks,
      isImportant,
    };

    try {
      // Reference to the tasks collection
      const tasksCollectionRef = collection(db, 'tasks');

      // Add a new document with an automatically generated ID
      const newTaskDocRef = await addDoc(tasksCollectionRef, task);

      // Get the generated ID
      const newTaskId = newTaskDocRef.id;

      // dispatch ADD_TASK action
      dispatch({ type: 'ADD_TASK', task: { ...task, id: newTaskId } });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to edit a task
  const editTask = async (id, title, details) => {
    try {
      const taskDocRef = doc(db, 'tasks', id);
      await updateDoc(taskDocRef, {
        title,
        details,
      });

      dispatch({
        type: 'EDIT_TASK',
        id,
        editedTitle: title,
        editedDetails: details,
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      const taskDocRef = doc(db, 'tasks', id);
      await deleteDoc(taskDocRef);

      dispatch({ type: 'DELETE_TASK', id });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to toggle task done status
  const toggleTaskStatus = async (id) => {
    try {
      const taskDocRef = doc(db, 'tasks', id);
      const taskDoc = await getDoc(taskDocRef);

      if (taskDoc.exists()) {
        const updatedTask = {
          ...taskDoc.data(),
          isCompleted: !taskDoc.data().isCompleted,
        };
        await updateDoc(taskDocRef, updatedTask);

        dispatch({ type: 'TOGGLE_DONE', id });
      } else {
        console.error('Task not found in Firestore');
      }
    } catch (error) {
      console.error('Error toggling task status:', error);
    }
  };

  // Function to edit remarks
  const editRemarks = async (id, remarks) => {
    try {
      const taskDocRef = doc(db, 'tasks', id);

      const taskDoc = await getDoc(taskDocRef);

      if (taskDoc.exists()) {
        const existingData = taskDoc.data() || {};
        const updatedTask = { ...existingData, remarks };

        await updateDoc(taskDocRef, updatedTask);

        dispatch({ type: 'ADD_REMARKS', editedRemarks: remarks, id });
      } else {
        console.error('Task not found in Firestore');
      }
    } catch (error) {
      console.error('Error editing remarks:', error);
    }
  };

  // Function to get done tasks
  const getDoneTasks = () => {
    return tasks.filter((task) => task.isCompleted);
  };

  // Function to get important tasks
  const getImportantTasks = () => {
    return tasks.filter((task) => task.isImportant);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        editRemarks,
        toggleTaskStatus,
        getDoneTasks,
        getImportantTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to consume the context
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context)
    console.log('useTaskContext must be used within TaskContextProvider');

  return context;
};
