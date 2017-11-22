import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editTodo, removeTodo } from 'js/api';

import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Chip from 'material-ui/Chip';

import './Todo.css';


class Todo extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='Todo'>
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
      </div>
    );
  }

  onRemove = () => {

    this.todosIns.setState({ isLoading: true });
    
    this.props.dispatch(removeTodo(this.props.index)).then(() => {
      this.todosIns.setState({ isLoading: false, showAddTodoForm: false });
    });
  };

  onStatusChange = () => {

    this.todosIns.setState({ isLoading: true });

    const newTodo = {
      ...this.props.data,
      status: Number(!Boolean(this.props.data.status))
    };

    this.props.dispatch(editTodo(this.props.index, newTodo)).then(() => {
      this.todosIns.setState({ isLoading: false });
    });
  };
};

Todo.contextTypes = {
  todosIns: PropTypes.object
};

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps)(Todo);