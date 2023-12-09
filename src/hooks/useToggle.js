import { useState } from 'react';

const useToggle = (initialValue) => {
  const [status, setStatus] = useState(initialValue);

  const toggleStatus = () => setStatus((prevState) => !prevState);

  return { status, setStatus, toggleStatus };
};

export default useToggle;
