import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Delete this', completed: false }];
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } =
    useTodoState(initialTodos);
  const style = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa',
  };

  return (
    <Paper style={style} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
