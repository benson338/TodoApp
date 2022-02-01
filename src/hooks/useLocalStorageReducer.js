import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, dispatch];
}

// useReducer(reducer, intialValue, initialValueFunction);

// only if we pass down reducer, we can use dispatch with action object
// reducer is passed down here to use useReducer capture dispatch & return dispatch
