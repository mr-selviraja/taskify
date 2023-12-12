import Header from './components/Header/Header.component';
import Navigation from './components/Navigation/Navigation.component';
import AddTask from './components/AddTask/AddTask.component';
import '../src/styles/_shared-styles.scss';
import { useState } from 'react';
import { useThemeContext } from './contexts/ThemeContext';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page404 from './pages/Page404';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import DoneTasks from './pages/DoneTasks';
import { useTaskContext } from './contexts/TaskContext';

function App() {
  // States to manage the modal active status
  const [isModalActive, setIsModalActive] = useState(false);

  // Destructured tasks from TaskContext
  const { tasks, getDoneTasks, getImportantTasks } = useTaskContext();

  // Global states and handlers to manage the theming of app using contextAPI
  const { theme, toggleTheme } = useThemeContext();

  // Method to toggle modal active status
  const toggleModalActive = (e) => {
    e.stopPropagation();
    setIsModalActive((prevState) => !prevState);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
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

              <Outlet />
            </div>
          </div>

          {isModalActive && (
            <AddTask theme={theme} onToggleModal={toggleModalActive} />
          )}
        </>
      ),
      errorElement: <Page404 />,
      children: [
        {
          index: true,
          element: <AllTasks theme={theme} tasks={tasks} />,
        },
        {
          path: 'done',
          element: <DoneTasks theme={theme} tasks={getDoneTasks()} />,
        },
        {
          path: 'important',
          element: <ImportantTasks theme={theme} tasks={getImportantTasks()} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
