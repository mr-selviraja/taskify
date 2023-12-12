import TaskList from '../components/TaskList/TaskList.component';

function ImportantTasks({ theme, tasks }) {
  return (
    <div className='important-tasks'>
      <TaskList theme={theme} tasks={tasks} />
    </div>
  );
}

export default ImportantTasks;
