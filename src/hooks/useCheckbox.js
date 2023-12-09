import { useState } from 'react';

const useCheckbox = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return { checked, onChange: handleCheckboxChange };
};

export default useCheckbox;
