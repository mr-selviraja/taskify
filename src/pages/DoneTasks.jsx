import TaskList from '../components/TaskList/TaskList.component';

function DoneTasks({ theme, tasks }) {
  return (
    <div className='done-tasks'>
      <TaskList theme={theme} tasks={tasks} />
    </div>
  );
}

export default DoneTasks;
