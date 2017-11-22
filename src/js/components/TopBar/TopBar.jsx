import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import RefreshIcon from 'material-ui-icons/Refresh';

import { getTodos } from 'js/api';
import { START_LOADER, STOP_LOADER } from 'js/actions';
import './TopBar.css';


class TopBar extends Component {
  
  render() {

    const { isTodoListLoading, todos } = this.props;

    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography className='TopBar-typography' type='title' color='inherit'>
            My todos<span> { isTodoListLoading ? '...' : '(' + todos.length + ')' }</span>
          </Typography>
          <IconButton><RefreshIcon onClick = { this.reload } /></IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  reload = () => {
    if (!this.props.isTodoListLoading) {
      this.props.dispatch(START_LOADER('TodoList'));
      this.props.dispatch(getTodos()).then(() => {
        this.props.dispatch(STOP_LOADER('TodoList'));
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isTodoListLoading: state.loader.TodoList.isLoading
  }
}

export default connect(mapStateToProps)(TopBar);