import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Clean Fishtank', completed: false },
  { id: 2, task: 'Wash Car', completed: true },
  { id: 3, task: 'Grow Beard', completed: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

// Note: The perfomance isssue is caused by passing todos along with dispatch. Eventhough dispatch isn't changing (it's a function), todos keep changing, that will rerender the consumer component unnecessarly. To avoid that split context into two..

// <TodosContext.Provider value={{ todos }}>
//  <DispatchContext.Provider value={{ dispatch }}>
//    {props.children}
//  </DispatchContext.Provider>
// </TodosContext.Provider>

// Note: This will still create perfomance issues as before, since we are creating a new object each time, by value={{dispatch: dispatch}} which isn't necessary. value = dispatch is enough. Make corresponding changes in recieving components also
