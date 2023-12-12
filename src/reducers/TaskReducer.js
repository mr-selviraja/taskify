// reducers/TaskReducer.js
const TaskReducer = (tasks, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks;

    case 'TOGGLE_DONE':
      return tasks.map((task) =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

    case 'EDIT_TASK':
      return tasks.map((task) =>
        task.id === action.id
          ? {
              ...task,
              title: action.editedTitle,
              details: action.editedDetails,
            }
          : task
      );

    case 'DELETE_TASK':
      return tasks.filter((task) => task.id !== action.id);

    case 'ADD_REMARKS':
      return tasks.map((task) =>
        task.id === action.id
          ? { ...task, remarks: action.editedRemarks }
          : task
      );

    case 'ADD_TASK':
      return [...tasks, action.task]; // Update the local state

    default:
      return tasks; // Return the existing tasks array for the default case
  }
};

export default TaskReducer;
