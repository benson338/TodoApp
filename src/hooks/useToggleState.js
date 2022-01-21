import { useState } from 'react';

export default function useToggleState(intialVal = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(intialVal);
  const toggle = () => setState(!state);
  // return piece of state & () to toggle it
  return [state, toggle];
}
