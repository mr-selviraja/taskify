import Header from './components/Header/Header.component';

// Styles
import '../src/styles/_shared-styles.scss';
import Navigation from './components/Navigation/Navigation.component';
import TaskList from './components/TaskList/TaskList.component';

import tasksArr from './data';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(tasksArr);

  // Method to save remarks
  const saveRemarks = (id, remarks) => {
    console.log(`save remarks called : ${id} ${remarks}`);

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, remarks };
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
      <div className='container'>
        <Header />

        <button className='btn-add-task font-accent btn btn__white btn__rect btn__rounded'>
          Add Task
        </button>

        <Navigation />

        <TaskList tasks={tasks} onSaveRemarks={saveRemarks} />
      </div>
    </div>
  );
}

export default App;
