import { useState } from 'react';

const useToggle = (
  initialValue,
  statusName = 'status',
  setStatusName = 'setStatus',
  toggleStatusName = 'toggleStatus'
) => {
  const [status, setStatus] = useState(initialValue);

  const toggleStatus = () => setStatus((prevState) => !prevState);

  const result = {
    [statusName]: status,
    [setStatusName]: setStatus,
    [toggleStatusName]: toggleStatus,
  };

  return result;
};

export default useToggle;
