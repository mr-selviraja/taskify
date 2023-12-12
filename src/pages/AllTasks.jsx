import React from 'react';
import TaskList from '../components/TaskList/TaskList.component';

function AllTasks({ tasks, theme }) {
  return (
    <div className='all-tasks'>
      <TaskList theme={theme} tasks={tasks} />
    </div>
  );
}

export default AllTasks;
