import TaskList from '../components/TaskList/TaskList.component';

function ImportantTasks({ theme, tasks }) {
  return (
    <div className='important-tasks'>
      <h1>Important</h1>
      <TaskList theme={theme} tasks={tasks} />
    </div>
  );
}

export default ImportantTasks;
