import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import useInput from '../../hooks/useInput';
import useCheckbox from '../../hooks/useCheckbox';
import './AddTask.styles.scss';
import { useTaskContext } from '../../contexts/TaskContext';

function Modal({ theme, onToggleModal }) {
  const titleProps = useInput('');
  const detailsProps = useInput('');
  const remarksProps = useInput('');
  const taskImportance = useCheckbox(false);
  const { addTask } = useTaskContext();

  function formSubmitted(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Form Submitted!');
    // Additional form handling logic, e.g., calling addTask
    addTask(
      titleProps.value,
      detailsProps.value,
      remarksProps.value,
      taskImportance.checked
    );
    onToggleModal(e);
  }

  return (
    <section className='modal-container'>
      <div className={`modal fg-${theme}`}>
        <h2 className='modal__title font-accent text-center text-primary text-uppercase'>
          Add New Task
        </h2>

        <form onSubmit={formSubmitted} className='modal__body'>
          <input
            className='font-accent'
            name='taskTitle'
            type='text'
            placeholder='Title of the Task'
            {...titleProps}
          />

          <textarea
            placeholder='Details of the Task'
            name='taskDetails'
            rows={3}
            {...detailsProps}
          ></textarea>

          <textarea
            placeholder='Remarks of the Task'
            name='taskRemarks'
            rows={3}
            {...remarksProps}
          ></textarea>

          <label>
            <input type='checkbox' name='taskImportance' {...taskImportance} />
            <span>Is the Task Important?</span>
          </label>

          <div className='modal__footer btn__group'>
            <button
              type='submit'
              className={`btn btn__rect btn__rounded btn__${
                theme === 'light' ? 'dark' : 'light'
              }`}
            >
              <FaPlus />
              <span>ADD TASK</span>
            </button>
            <button
              onClick={(e) => onToggleModal(e)}
              className={`btn btn__rect btn__rounded btn__outlined-${
                theme === 'light' ? 'dark' : 'light'
              }`}
            >
              <RxCross2 />
              <span>DISCARD TASK</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Modal;
