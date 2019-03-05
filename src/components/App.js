import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'unstated';
import TodoList from './TodoList';
import DeletedTodoList from './DeletedTodoList';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={TodoList} />
            <Route path="/deleted-todos" component={DeletedTodoList} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
