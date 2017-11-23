import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from 'js/api';
import { HIDE } from 'js/actions';
import { TopBar, TodoList, ActionPanel, AddTodoDialog } from 'js/components';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(getTodos()).then(() => {
      this.props.dispatch(HIDE('TodoListLoader'));
    });
  }

  render() {

    const { isAddToDoDialogShown } = this.props;

    return (
      <div className='App'>
        <TopBar/>
        <br/>
        <TodoList/>
        <br/>
        <ActionPanel/>
        <AddTodoDialog isShown = {isAddToDoDialogShown} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAddToDoDialogShown: state.visibility.AddTodoDialog
  }
}

export default connect(mapStateToProps)(App);