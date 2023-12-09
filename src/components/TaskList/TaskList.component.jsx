import TaskCard from '../TaskCard/TaskCard.components';
import './TaskList.styles.scss';

function TaskList({ tasks, dispatch }) {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <TaskCard key={task.id} id={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TaskList;
