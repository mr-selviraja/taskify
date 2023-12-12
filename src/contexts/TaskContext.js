import { createContext, useContext, useReducer } from 'react';
import tasks from '../data';

const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case 'TOGGLE_DONE':
      const toggledTasks = tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return toggledTasks;

    case 'EDIT_TASK':
      const editedTasks = tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            title: action.editedTitle,
            details: action.editedDetails,
          };
        }
        return task;
      });
      return editedTasks;

    case 'DELETE_TASK':
      const remainingTasks = tasks.filter((task) => task.id !== action.id);
      return remainingTasks;

    case 'ADD_REMARKS':
      const editedRemarks = tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            remarks: action.editedRemarks,
          };
        }
        return task;
      });
      return editedRemarks;

    case 'ADD_TASK':
      const newTask = {
        id: tasks.length + 1,
        ...action.task,
      };
      const updatedTasks = [newTask, ...tasks];
      return updatedTasks;

    default:
      return tasks; // Return the existing tasks array for the default case
  }
};

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
    // Don't proceed if any of the form values are empty
    if (title === '' || details === '' || remarks === '') return;

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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        editRemarks,
        toggleTaskStatus,
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
