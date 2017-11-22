import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTodos } from 'js/api';
import Todo from 'js/components/Todo/Todo';
import ActionPanel from 'js/components/ActionPanel/ActionPanel';
import AddTodoForm from 'js/components/AddTodoForm/AddTodoForm';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import RefreshIcon from 'material-ui-icons/Refresh';

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
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title' color='inherit' style={{ 'flex': '1' }}>
              Todos<span> { this.state.isLoading ? '...' : '(' + this.props.todos.length + ')' }</span>
            </Typography>
            <IconButton><RefreshIcon onClick = { this.reload } /></IconButton>
          </Toolbar>
        </AppBar>
        <br />
        {
          this.state.isLoading ? <div style = {{ 'textAlign': 'center' }}><CircularProgress /></div>:
          <div>
            <List>{ this.renderItems() }</List>
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
        <Todo key = {content.length + 1} index = {content.length} data = {todo} />
      );
    }
    return content;
  }

  reload = () => {
    if (!this.state.isLoading) {
      this.setState({ isLoading: true });
      this.props.dispatch(getTodos()).then(() => {
        this.setState({ isLoading: false });
      });
    }
  };
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