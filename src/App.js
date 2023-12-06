import Header from './components/Header/Header.component';

// Styles
import '../src/styles/_shared-styles.scss';
import Navigation from './components/Navigation/Navigation.component';
import TaskList from './components/TaskList/TaskList.component';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />

        <button className='btn-add-task font-accent btn btn__white btn__rect btn__rounded'>
          Add Task
        </button>

        <Navigation />

        <TaskList />
      </div>
    </div>
  );
}

export default App;
