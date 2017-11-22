import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from 'js/api';
import { STOP_LOADER } from 'js/actions';
import { TopBar, TodoList, ActionPanel, AddTodoDialog } from 'js/components';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(getTodos()).then(() => {
      this.props.dispatch(STOP_LOADER('TodoList'));
    });
  }

  render() {

    const { showAddTodoDialog } = this.props;

    return (
      <div className='App'>
        <TopBar/>
        <br/>
        <TodoList/>
        <br/>
        <ActionPanel/>
        <AddTodoDialog open = {showAddTodoDialog} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showAddTodoDialog: state.dialog.AddTodoDialog.visible
  }
}

export default connect(mapStateToProps)(App);