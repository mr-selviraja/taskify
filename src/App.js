import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';
import TaskList from './components/TaskList/TaskList.component';
import AddTask from './components/AddTask/AddTask.component';
import tasks from './data';
import TaskReducer from './reducers/TaskReducer';
import '../src/styles/_shared-styles.scss';
import { useState, useReducer } from 'react';
import { useThemeContext } from './contexts/ThemeContext';

function App() {
  // States to manage the modal active status
  const [isModalActive, setIsModalActive] = useState(false);

  // State and Dispatcher to reduce the tasks state updates using useReducer
  const [currentTasks, dispatch] = useReducer(TaskReducer, tasks);

  // Global states and handlers to manage the theming of app using contextAPI
  const { theme, toggleTheme } = useThemeContext();

  // Method to toggle modal active status
  const toggleModalActive = (e) => {
    e.stopPropagation();
    setIsModalActive((prevState) => !prevState);
  };

  console.log('THEME IN APP: ', theme);

  return (
    <>
      <div className={`app bg-${theme}`}>
        <div className='container'>
          <Header theme={theme} toggleTheme={toggleTheme} />

          <button
            onClick={toggleModalActive}
            className={`btn-add-task font-accent btn btn__rect btn__rounded fg-${theme}`}
          >
            Add Task
          </button>

          <Navigation theme={theme} />

          <TaskList theme={theme} tasks={currentTasks} dispatch={dispatch} />
        </div>
      </div>

      {isModalActive && (
        <AddTask
          theme={theme}
          onToggleModal={toggleModalActive}
          dispatch={dispatch}
        />
      )}
    </>
  );
}

export default App;
