import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          task={task}
          id={id}
          editTodo={editTodo}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            // disableRipple
            tabIndex={-1}
            // disabling keyboard navigation(/w tab)
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodo(id)}>
              <DeleteIcon aria-label="delete" />
            </IconButton>
            <IconButton onClick={toggle}>
              <EditIcon aria-label="edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
