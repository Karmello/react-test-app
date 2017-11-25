import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Checkbox, IconButton, Chip } from 'material-ui';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import DeleteIcon from 'material-ui-icons/Delete';

import { putOne, deleteOne } from 'js/api';
import { show, hide, setActiveTodo } from 'js/actions';


class Todo extends Component {

  render() {
    return (
      <div>
        <ListItem button onClick = { this.onOpen }>
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
      </div>
    );
  }

  onOpen = () => {
    this.props.dispatch(setActiveTodo(this.props.index));
    this.props.dispatch(show('TodoDialog'));
  }

  onRemove = () => {
    this.props.dispatch(show('TodoListLoader'));
    this.props.dispatch(deleteOne(this.props.index)).then(() => {
      this.props.dispatch(hide('TodoListLoader'));
    });
  };

  onStatusChange = () => {
    
    this.props.dispatch(show('TodoListLoader'));

    const newTodo = {
      ...this.props.data,
      status: Number(!Boolean(this.props.data.status))
    };

    this.props.dispatch(putOne(this.props.index, newTodo)).then(() => {
      this.props.dispatch(hide('TodoListLoader'));
    });
  };
};

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps)(Todo);