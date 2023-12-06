import TaskCard from '../TaskCard/TaskCard.components';
import './TaskList.styles.scss';
import tasksArr from '../../data';

function TaskList() {
  return (
    <ul className='task-list'>
      {tasksArr.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
