import { useState } from 'react';

export default function useInputState(initalVal) {
  const [value, setValue] = useState(initalVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
}
