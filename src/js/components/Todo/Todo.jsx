import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editTodo, removeTodo } from 'js/api';

import './Todo.css';


const labels = ['Mark as done', 'Mark as not done'];

class Todo extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='Todo'>
        { this.props.number + ') ' + this.props.data.description }
        <div>
          <button onClick = { this.onStatusChange }>{ labels[this.props.data.status] }</button>
          <button onClick = { this.onRemove }>Remove</button>
        </div>
      </div>
    );
  }

  onRemove = () => {

    this.todosIns.setState({ isLoading: true });
    
    this.props.dispatch(removeTodo(this.props.number - 1)).then(() => {
      this.todosIns.setState({ isLoading: false, showAddTodoForm: false });
    });
  };

  onStatusChange = () => {

    this.todosIns.setState({ isLoading: true });

    const newTodo = {
      ...this.props.data,
      status: Number(!Boolean(this.props.data.status))
    };

    this.props.dispatch(editTodo(this.props.number - 1, newTodo)).then(() => {
      this.todosIns.setState({ isLoading: false });
    });
  };
};

Todo.contextTypes = {
  todosIns: PropTypes.object
};

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps)(Todo);