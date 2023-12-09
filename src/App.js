import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';
import TaskList from './components/TaskList/TaskList.component';
import AddTask from './components/AddTask/AddTask.component';
import tasks from './data';
import TaskReducer from './reducers/TaskReducer';
import '../src/styles/_shared-styles.scss';
import { useState, useReducer } from 'react';

function App() {
  const [isModalActive, setIsModalActive] = useState(true);

  const [currentTasks, dispatch] = useReducer(TaskReducer, tasks);

  // Method to toggle modal active status
  const toggleModalActive = (e) => {
    e.stopPropagation();
    setIsModalActive((prevState) => !prevState);
  };

  return (
    <>
      <div className='app'>
        <div className='container'>
          <Header />

          <button
            onClick={toggleModalActive}
            className='btn-add-task font-accent btn btn__white btn__rect btn__rounded'
          >
            Add Task
          </button>

          <Navigation />

          <TaskList tasks={currentTasks} dispatch={dispatch} />
        </div>
      </div>

      {isModalActive && (
        <AddTask onToggleModal={toggleModalActive} dispatch={dispatch} />
      )}
    </>
  );
}

export default App;
