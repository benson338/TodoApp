import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

// const defaultTodos = [
//   { id: 1, task: 'Clean Fishtank', completed: false },
//   { id: 2, task: 'Wash Car', completed: true },
//   { id: 3, task: 'Grow Beard', completed: false },
// ];
const defaultTodos = [{ id: 1, task: 'Delete this', completed: false }];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    defaultTodos,
    todoReducer
    // only if we pass down reducer, we can use dispatch with action object
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
