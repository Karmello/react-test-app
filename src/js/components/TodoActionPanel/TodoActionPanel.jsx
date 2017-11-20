import React, { Component } from 'react';
import { getItems } from 'js/api';


export default class TodoActionPanel extends Component {

  render() {
    return (
      <div className='TodoActionPanel'>
        <button onClick = { this.reloadItems }>Reload</button>
        <button onClick= { this.showAddTodoForm }>Add</button>
      </div>
    );
  }

  reloadItems = () => {
    const todos = this.props.todos;
    todos.setState(this.props.initialState);
    getItems(todos.state.items, (data) => {
      todos.setState({ items: data, isLoading: false });
    });
  };

  showAddTodoForm = () => {
    this.props.todos.setState({ showAddTodoForm: true });
  }
};