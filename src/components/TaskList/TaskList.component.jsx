import { useReducer } from 'react';
import TaskCard from '../TaskCard/TaskCard.components';
import TaskReducer from '../../reducers/TaskReducer';
import './TaskList.styles.scss';

function TaskList({ tasks }) {
  const [currentTasks, dispatch] = useReducer(TaskReducer, tasks);

  return (
    <ul className='task-list'>
      {currentTasks.map((task) => (
        <TaskCard key={task.id} id={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TaskList;
