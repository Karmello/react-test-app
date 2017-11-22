import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Checkbox, IconButton, Chip } from 'material-ui';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';

import { editTodo, removeTodo } from 'js/api';
import { START_LOADER, STOP_LOADER } from 'js/actions';


class Todo extends Component {

  render() {
    return (
      <ListItem button>
        <ListItemIcon>
          <Chip label = {this.props.index + 1} />
        </ListItemIcon>
        <ListItemText primary = { this.props.data.description } />
        <ListItemSecondaryAction>
          <IconButton onClick = { this.onRemove }><DeleteIcon /></IconButton>
          <IconButton onClick = { this.onStatusChange }>
            <Checkbox
              checked={this.props.data.status === 1}
              tabIndex={-1}
              disableRipple
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  onRemove = () => {
    this.props.dispatch(START_LOADER('TodoList'));
    this.props.dispatch(removeTodo(this.props.index)).then(() => {
      this.props.dispatch(STOP_LOADER('TodoList'));
    });
  };

  onStatusChange = () => {
    
    this.props.dispatch(START_LOADER('TodoList'));

    const newTodo = {
      ...this.props.data,
      status: Number(!Boolean(this.props.data.status))
    };

    this.props.dispatch(editTodo(this.props.index, newTodo)).then(() => {
      this.props.dispatch(STOP_LOADER('TodoList'));
    });
  };
};

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps)(Todo);