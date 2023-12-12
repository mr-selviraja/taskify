import { createContext, useContext, useReducer } from 'react';
import tasks from '../data';
import TaskReducer from '../reducers/TaskReducer';

// Create context
const TaskContext = createContext();

// Intialize state for the reducer
const initialState = tasks;

// Create provider for the context
export const TaskContextProvider = ({ children }) => {
  // eslint-disable-next-line no-use-before-define
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);

  // Function to add a task
  const addTask = (title, details, remarks, isImportant) => {
    // Construct a task object
    const task = {
      title,
      isCompleted: false,
      details,
      remarks,
      isImportant,
    };

    // dispatch ADD_TASK action
    dispatch({ type: 'ADD_TASK', task });
  };

  // Function to edit a task
  const editTask = (id, title, details) => {
    dispatch({
      type: 'EDIT_TASK',
      editedTitle: title,
      editedDetails: details,
      id,
    });
  };

  // Function to delete a task
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', id });

  // Function to toggle task done status
  const toggleTaskStatus = (id) => dispatch({ type: 'TOGGLE_DONE', id });

  // Function to edit remarks
  const editRemarks = (id, remarks) => {
    dispatch({
      type: 'ADD_REMARKS',
      editedRemarks: remarks,
      id,
    });
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
