import React, { Component } from 'react';
import { deleteItem } from 'js/api';
import './Todo.css';


const labels = ['Mark as done', 'Mark as not done']

export default class Todo extends Component {

  render() {
    return (
      <div className='Todo'>
        { this.props.number + ') ' + this.props.item.description }
        <div>
          <button onClick = { this.onStatusChange }>{ labels[this.props.item.status] }</button>
          <button onClick = { this.onRemove }>Remove</button>
        </div>
      </div>
    );
  }

  onRemove = () => {

    const todos = this.props.todos;
    const index = this.props.number - 1;

    todos.setState({ isLoading: true, showAddTodoForm: false });
    
    deleteItem(index, (success) => {
      if (success) {
        todos.setState({
          items: [
             ...todos.state.items.slice(0, index),
             ...todos.state.items.slice(index + 1)
          ],
          isLoading: false
        });

      }
    });
  };

  onStatusChange = () => {

    const todos = this.props.todos;
    const index = this.props.number - 1;

    todos.setState((prevState) => {
      prevState.items[index].status = Number(!prevState.items[index].status);
      return { ...prevState }
    });
  };
};