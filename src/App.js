import React, { Component } from 'react';
import './styles/App.css';

import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    let todoListValue = this.refs.todobox.getInputValue();
    let readingState  = this.state.todoItems.concat(todoListValue);

    this.setState(
      {
        todoItems: readingState,
      }
    );
  }
  render() {
    return (
      <div className="App">
        <TodoBox ref="todobox" onSubmit={ this.onSubmit }/>
        <TodoList ref="todolist" items={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
