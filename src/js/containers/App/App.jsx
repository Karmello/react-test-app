import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAll } from 'js/api';
import { hide } from 'js/actions';
import { TopBar, TodoList, ActionPanel, TodoDialog } from 'js/components';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(getAll()).then(() => {
      this.props.dispatch(hide('TodoListLoader'));
    });
  }

  render() {

    const { isToDoDialogShown } = this.props;

    return (
      <div className='App'>
        <TopBar/>
        <br/>
        <TodoList/>
        <br/>
        <ActionPanel/>
        <TodoDialog isShown = {isToDoDialogShown} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isToDoDialogShown: state.visibility.TodoDialog
  }
}

export default connect(mapStateToProps)(App);