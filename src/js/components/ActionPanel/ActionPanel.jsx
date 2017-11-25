import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';

import { deleteMultiple } from 'js/api';
import { show, hide } from 'js/actions';
import './ActionPanel.css';


class ActionPanel extends Component {

  render() {

    const { isTodoListLoaderShown } = this.props;

    if (!isTodoListLoaderShown) {
      return (
        <div className='ActionPanel'>
          <Button raised color='accent' onClick = {this.clearTodos}>Clear</Button>
          <Button raised color='primary' onClick = {this.addTodo}>Add</Button>
        </div>
      );
    }
    return null;
  }

  clearTodos = () => {
    this.props.dispatch(show('TodoListLoader'));
    this.props.dispatch(deleteMultiple()).then(() => {
      this.props.dispatch(hide('TodoListLoader'));
    });
  }

  addTodo = () => {
    this.props.dispatch(show('TodoDialog'));
  }
};

const mapStateToProps = (state) => {
  return {
    isTodoListLoaderShown: state.visibility.TodoListLoader
  };
}

export default connect(mapStateToProps)(ActionPanel);