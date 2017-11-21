import React, { Component } from 'react';
import { getItems } from 'js/api';


export default class ActionPanel extends Component {

  render() {
    return (
      <div className='ActionPanel'>
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