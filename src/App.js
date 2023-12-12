import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';
import TaskList from './components/TaskList/TaskList.component';
import AddTask from './components/AddTask/AddTask.component';
import '../src/styles/_shared-styles.scss';
import { useState } from 'react';
import { useThemeContext } from './contexts/ThemeContext';
import { useTaskContext } from './contexts/TaskContext';

function App() {
  // States to manage the modal active status
  const [isModalActive, setIsModalActive] = useState(false);

  // Destructured tasks from TaskContext
  const { tasks } = useTaskContext();

  // Global states and handlers to manage the theming of app using contextAPI
  const { theme, toggleTheme } = useThemeContext();

  // Method to toggle modal active status
  const toggleModalActive = (e) => {
    e.stopPropagation();
    setIsModalActive((prevState) => !prevState);
  };

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

          <TaskList theme={theme} tasks={tasks} />
        </div>
      </div>

      {isModalActive && (
        <AddTask theme={theme} onToggleModal={toggleModalActive} />
      )}
    </>
  );
}

export default App;
