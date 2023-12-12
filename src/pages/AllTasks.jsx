import React from 'react';
import TaskList from '../components/TaskList/TaskList.component';

function AllTasks({ tasks, theme }) {
  return (
    <div className='all-tasks'>
      <h1>All</h1>
      <TaskList theme={theme} tasks={tasks} />
    </div>
  );
}

export default AllTasks;
