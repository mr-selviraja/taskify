import React from 'react';
import TaskCard from '../TaskCard/TaskCard.components';
import './TaskList.styles.scss';

function TaskList({ theme, tasks }) {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <TaskCard key={task.id} theme={theme} id={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
