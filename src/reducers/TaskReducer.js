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

export default TaskReducer;
