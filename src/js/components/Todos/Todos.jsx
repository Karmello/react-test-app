import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTodos } from 'js/api';
import Todo from 'js/components/Todo/Todo';
import ActionPanel from 'js/components/ActionPanel/ActionPanel';
import AddTodoForm from 'js/components/AddTodoForm/AddTodoForm';

import './Todos.css';


class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, showAddTodoForm: false };
  }

  componentDidMount() {
    this.props.dispatch(getTodos()).then(() => {
      this.setState({ isLoading: false });
    });
  }

  getChildContext() {
    return { todosIns: this };
  }
  
  render() {
    return (
      <div className='Todos'>
        <div className='Todos-header'>
          <h2>Todos { !this.state.isLoading && <span> ({ this.props.todos.length })</span> }</h2>
        </div>
        {
          this.state.isLoading ? 'Loading ...' :
          <div>
            <div className='Todos-content'>{ this.renderItems() }</div>
            <br />
            <ActionPanel/>
            { this.state.showAddTodoForm && <AddTodoForm/> }
          </div>
        }
      </div>
    );
  }

  renderItems = () => {
    const content = [];
    for (const todo of this.props.todos) {
      content.push(
        <Todo
          key = {content.length + 1}
          number = {content.length + 1}
          data = {todo}
        />
      );
    }
    return content;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

Todos.childContextTypes = {
  todosIns: PropTypes.object
};

export default connect(mapStateToProps)(Todos);