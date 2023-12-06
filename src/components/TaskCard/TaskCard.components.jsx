import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import './TaskCard.styles.scss';

export default function TaskCard({ task }) {
  const { title, isCompleted, taskDetails, taskRemarks, isImportant } = task;

  return (
    <section className='task-card fg-light'>
      <h2 className='task-card__title font-accent'>{title}</h2>

      <div className='task-card__body'>
        <p>{taskDetails}</p>

        <hr className='hr-rule' />

        <p>
          <span className='text-italic text-bold'>Remarks: </span>
          <span>{taskRemarks}</span>
        </p>
      </div>

      <div className='task-card__footer'>
        <div className='btn__group'>
          <button className='btn btn__rect btn__rounded btn__success'>
            Mark As {isCompleted ? 'Undone' : 'Done'}
          </button>

          <button className='btn btn__sqr btn__rounded btn__warning'>
            <MdEdit />
          </button>

          <button className='btn btn__sqr btn__rounded btn__danger'>
            <MdDelete />
          </button>
        </div>

        <button className='btn btn__rect btn__rounded btn__outlined-dark'>
          Add Remarks
        </button>
      </div>
      {isImportant && <div className='task-card__tag'>IMPORTANT</div>}
    </section>
  );
}
