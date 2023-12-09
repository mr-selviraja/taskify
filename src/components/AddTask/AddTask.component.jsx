import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import useInput from '../../hooks/useInput';
import useCheckbox from '../../hooks/useCheckbox';
import './AddTask.styles.scss';

function Modal({ onToggleModal, dispatch }) {
  const titleProps = useInput('');
  const detailsProps = useInput('');
  const remarksProps = useInput('');
  const taskImportance = useCheckbox(false);

  // Method to handle adding task
  const handleAddTask = (e) => {
    const task = {
      title: titleProps.value,
      isCompleted: false,
      details: detailsProps.value,
      remarks: remarksProps.value,
      isImportant: taskImportance.checked,
    };

    console.log(`Task: ${task}`);

    dispatch({
      type: 'ADD_TASK',
      task,
    });

    onToggleModal(e);
  };

  return (
    <section className='modal-container'>
      <div className='modal'>
        <h2 className='modal__title font-accent text-center text-primary text-uppercase'>
          Add New Task
        </h2>

        <div className='modal__body'>
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
        </div>

        <div
          onClick={(e) => {
            handleAddTask(e);
          }}
          className='modal__footer btn__group'
        >
          <button className='btn btn__rect btn__rounded btn__dark'>
            <FaPlus />
            <span>ADD TASK</span>
          </button>

          <button
            onClick={(e) => onToggleModal(e)}
            className='btn btn__rect btn__rounded btn__outlined-dark'
          >
            <RxCross2 />
            <span>DISCARD TASK</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
