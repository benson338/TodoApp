import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off value in LS (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update LS when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return [state, setState];
}

// key is string/name of data in LS, state is data in LS
// const [todos, setTodos] = useLocalStorageState('todos', []);
