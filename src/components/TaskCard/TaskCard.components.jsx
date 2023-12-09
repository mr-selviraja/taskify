import React from 'react';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import './TaskCard.styles.scss';

export default function TaskCard({ task, dispatch, id }) {
  // Props received from TaskList
  const { title, isCompleted, details, remarks, isImportant } = task;

  // Using a custom hook for a reusable logic to toggle between two states
  // HERE WE'RE USING DESTRUCTURING ASSIGNMENT TO RENAME THE PROPERTIES RETURNED BY THE HOOK
  const { status: editTask, toggleStatus: toggleEditTask } = useToggle(false);
  const { status: editRemarks, toggleStatus: toggleEditRemarks } =
    useToggle(false);

  // Using a custom hook for reusable logic to extract value and onChange props
  const titleProps = useInput(title);
  const detailsProps = useInput(details);
  const remarksProps = useInput(remarks);

  // Method to handle task remarks
  const handleEditRemarks = () => {
    // If editRemarks is true => Save the remarks
    if (editRemarks)
      dispatch({
        type: 'ADD_REMARKS',
        editedRemarks: remarksProps.value,
        id,
      });

    // Else toggle edit remarks status
    toggleEditRemarks();
  };

  // Method to handle task edit
  const handleEditTask = () => {
    // If editTask is true => Save the task
    if (editTask)
      dispatch({
        type: 'EDIT_TASK',
        editedTitle: titleProps.value,
        editedDetails: detailsProps.value,
        id,
      });

    // Else toggle edit task status
    toggleEditTask();
  };

  return (
    <section className='task-card fg-light'>
      {editTask ? (
        <input className='font-accent' type='text' {...titleProps} />
      ) : (
        <h2 className='task-card__title font-accent'>{titleProps.value}</h2>
      )}

      <div className='task-card__body'>
        {editTask ? (
          <textarea rows={3} {...detailsProps}></textarea>
        ) : (
          <p>{detailsProps.value}</p>
        )}

        <hr className='hr-rule' />

        <p>
          <span className='text-italic text-bold'>Remarks: </span>
          {editRemarks ? (
            <textarea rows={3} {...remarksProps}></textarea>
          ) : (
            <span>&nbsp;{remarksProps.value}</span>
          )}
        </p>
      </div>

      <div className='task-card__footer'>
        <div className='btn__group'>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_DONE', id })}
            className='btn btn__rect btn__rounded btn__success'
          >
            Mark As {isCompleted ? 'Undone' : 'Done'}
          </button>

          <button
            onClick={handleEditTask}
            className='btn btn__sqr btn__rounded btn__warning'
          >
            {editTask ? <FaCheck /> : <MdEdit />}
          </button>

          <button
            onClick={() =>
              dispatch({
                type: 'DELETE_TASK',
                id,
              })
            }
            className='btn btn__sqr btn__rounded btn__danger'
          >
            <MdDelete />
          </button>
        </div>

        <button
          onClick={handleEditRemarks}
          className='btn btn__rect btn__rounded btn__outlined-dark'
        >
          {editRemarks ? 'Save Remarks' : 'Add Remarks'}
        </button>
      </div>
      {isImportant && <div className='task-card__tag'>IMPORTANT</div>}
    </section>
  );
}
