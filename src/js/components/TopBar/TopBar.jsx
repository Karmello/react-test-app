import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import RefreshIcon from 'material-ui-icons/Refresh';

import { getAll } from 'js/api';
import { show, hide } from 'js/actions';
import './TopBar.css';


class TopBar extends Component {
  
  render() {

    const { todos, isTodoListLoaderShown } = this.props;

    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography className='TopBar-typography' type='title' color='inherit'>
            My todos<span> { isTodoListLoaderShown ? '...' : '(' + todos.length + ')' }</span>
          </Typography>
          <IconButton><RefreshIcon onClick = { this.reload } /></IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  reload = () => {
    if (!this.props.isTodoListLoaderShown) {
      this.props.dispatch(show('TodoListLoader'));
      this.props.dispatch(getAll()).then(() => {
        this.props.dispatch(hide('TodoListLoader'));
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    isTodoListLoaderShown: state.visibility.TodoListLoader
  }
}

export default connect(mapStateToProps)(TopBar);