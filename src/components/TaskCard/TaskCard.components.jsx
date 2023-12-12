import React from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import './TaskCard.styles.scss';
import { useTaskContext } from '../../contexts/TaskContext';
import useReverseTheme from '../../hooks/useReverseTheme';

export default function TaskCard({ theme, task, id }) {
  // Props received from TaskList
  const { title, isCompleted, details, remarks, isImportant } = task;

  // Functions destructured out of the TaskContext
  const { editTask, deleteTask, toggleTaskStatus, editRemarks } =
    useTaskContext();

  // Using a custom hook for a reusable logic to toggle between two states
  // HERE WE'RE USING DESTRUCTURING ASSIGNMENT TO RENAME THE PROPERTIES RETURNED BY THE HOOK
  const { status: editTaskActive, toggleStatus: toggleEditTaskActive } =
    useToggle(false);
  const { status: editRemarksActive, toggleStatus: toggleEditRemarksActive } =
    useToggle(false);

  // Using a custom hook for reusable logic to extract value and onChange props
  const titleProps = useInput(title);
  const detailsProps = useInput(details);
  const remarksProps = useInput(remarks);

  // Function to handle task remarks
  const handleEditRemarks = (id) => {
    // If editRemarksActive is true => Save the remarks
    if (editRemarksActive) editRemarks(id, remarksProps.value);

    // Else toggle edit remarks status
    toggleEditRemarksActive();
  };

  // Function to handle task edit
  const handleEditTask = () => {
    // If editTaskActive is true => Save the task
    if (editTaskActive) editTask(id, titleProps.value, detailsProps.value);

    // Else toggle edit task status
    toggleEditTaskActive();
  };

  return (
    <section className={`task-card fg-${theme}`}>
      {editTaskActive ? (
        <input className='font-accent' type='text' {...titleProps} />
      ) : (
        <h2 className='task-card__title font-accent'>{titleProps.value}</h2>
      )}

      <div className='task-card__body'>
        {editTaskActive ? (
          <textarea rows={3} {...detailsProps}></textarea>
        ) : (
          <p>{detailsProps.value}</p>
        )}

        <hr className='hr-rule' />

        <p>
          <span className='text-italic text-bold'>Remarks: </span>
          {editRemarksActive ? (
            <textarea rows={3} {...remarksProps}></textarea>
          ) : (
            <span>&nbsp;{remarksProps.value}</span>
          )}
        </p>
      </div>

      <div className='task-card__footer'>
        <div className='btn__group'>
          <button
            onClick={() => toggleTaskStatus(id)}
            className={`btn btn__rect btn__rounded btn__success text-${useReverseTheme()}`}
          >
            Mark As {isCompleted ? 'Undone' : 'Done'}
          </button>

          <button
            onClick={handleEditTask}
            className={`btn btn__sqr btn__rounded btn__warning text-${useReverseTheme()}`}
          >
            {editTaskActive ? <FaCheck /> : <MdEdit />}
          </button>

          <button
            onClick={() => deleteTask(id)}
            className={`
            btn btn__sqr btn__rounded btn__danger text-${useReverseTheme()}
            `}
          >
            <MdDelete />
          </button>
        </div>

        <button
          onClick={handleEditRemarks}
          className={`btn btn__rect btn__rounded btn__outlined-${useReverseTheme()}`}
        >
          {editRemarksActive ? 'Save Remarks' : 'Add Remarks'}
        </button>
      </div>
      {isImportant && <div className='task-card__tag'>IMPORTANT</div>}
    </section>
  );
}
