import { Container } from 'unstated';
import uuid from 'uuid';

// This is the state container that holds the state and any logic related to it.
class TodosSC extends Container {
  PENDING_STATUS = 'pending'
  DONE_STATUS = 'done'
  DELETED_STATUS = 'deleted'
  DEFAULT_STATUS = this.PENDING_STATUS

  state = {
    todos: [],
    newTodo: '',
  };

  
  // Handle user input in new todo input.
  onNewTodoChange = evt => this.setState({ newTodo: evt.target.value })

  // Add the new todo item to todos list.
  addNewTodo = () => this.setState(
    currentState => ({ todos: [...currentState.todos, this.createNewTodo(currentState.newTodo)], newTodo: '' })
  )
    
  // Return a new todo object with the default status.
  createNewTodo = text => ({ id: uuid(), text, status: this.DEFAULT_STATUS })

  // A private method to host the functionality of changing todo status.
  // This will be used by other methods inside this state container only.
  // changeTodoStatus = (todo, newStatus) => this.setState(
  //   currentState => ({ todos: [...currentState.todos.filter(_todo => _todo.id !== todo.id), { ...todo, status: newStatus } ] })
  // )
  changeTodoStatus = (todo, newStatus) => this.setState(
    currentState => ({
      todos: currentState.todos.map(_todo => todo.id === _todo.id ? { ...todo, status: newStatus } : _todo),
    })
  )

  // Toggles between done and pending statuses.
  toggleTodoDoneStatus = todo => this.changeTodoStatus(todo, todo.status === this.DEFAULT_STATUS ? this.DONE_STATUS : this.DEFAULT_STATUS)

  // Guess what? This changes todo status to deleted 🎉
  deleteTodo = todo => this.changeTodoStatus(todo, this.DELETED_STATUS)

  // Guess what? This changes todo status back to pending 🎉
  unDeleteTodo = todo => this.changeTodoStatus(todo, this.DEFAULT_STATUS)

  // Guess what? This returns deleted todos 🎉
  deletedTodos = () => this.state.todos.filter(todo => todo.status === this.DELETED_STATUS)

  // Guess what? This returns not deleted todos 🎉
  pendingTodos = () => this.state.todos.filter(todo => todo.status === this.PENDING_STATUS)

  // Guess what? This returns not deleted todos 🎉
  doneTodos = () => this.state.todos.filter(todo => todo.status === this.DONE_STATUS)
};

export default TodosSC;
