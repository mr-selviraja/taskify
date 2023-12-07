import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import './TaskCard.styles.scss';
import { useState } from 'react';

export default function TaskCard({ task, dispatch, id }) {
  // Props received from TaskList
  const { title, isCompleted, details, remarks, isImportant } = task;

  // State for toggling task editing
  const [editTask, setEditTask] = useState(false);
  // Method to toggle task editing
  const toggleEditTask = () => setEditTask((prevState) => !prevState);

  // State for toggling task editing
  const [editRemarks, setEditRemarks] = useState(false);
  // Method to toggle task editing
  const toggleEditRemarks = () => setEditRemarks((prevState) => !prevState);

  // State to hold taskTitle
  const [taskTitle, setTaskTitle] = useState(title);
  // Method to handle the task title change
  const handleTitleChange = (e) => setTaskTitle(e.target.value);

  // State to hold taskDetails
  const [taskDetails, setTaskDetails] = useState(details);
  // Method to handle the task details change
  const handleDetailsChange = (e) => setTaskDetails(e.target.value);

  // State to hold taskDetails
  const [taskRemarks, setTaskRemarks] = useState(remarks);
  // Method to handle the task details change
  const handleRemarksChange = (e) => setTaskRemarks(e.target.value);

  // Method to handle task remarks
  const handleEditRemarks = () => {
    // If editRemarks is true => Save the remarks
    if (editRemarks)
      dispatch({
        type: 'ADD_REMARKS',
        editedRemarks: taskRemarks,
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
        editedTitle: taskTitle,
        editedDetails: taskDetails,
        id,
      });

    // Else toggle edit task status
    toggleEditTask();
  };

  return (
    <section className='task-card fg-light'>
      {editTask ? (
        <input
          className='font-accent'
          type='text'
          value={taskTitle}
          onChange={handleTitleChange}
        />
      ) : (
        <h2 className='task-card__title font-accent'>{taskTitle}</h2>
      )}

      <div className='task-card__body'>
        {editTask ? (
          <textarea
            rows={3}
            value={taskDetails}
            onChange={handleDetailsChange}
          ></textarea>
        ) : (
          <p>{taskDetails}</p>
        )}

        <hr className='hr-rule' />

        <p>
          <span className='text-italic text-bold'>Remarks: </span>
          {editRemarks ? (
            <textarea
              rows={3}
              value={taskRemarks}
              onChange={handleRemarksChange}
            ></textarea>
          ) : (
            <span>&nbsp;{taskRemarks}</span>
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
