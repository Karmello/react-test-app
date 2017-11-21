import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import { getTodos } from 'js/api';

import './ActionPanel.css';


class ActionPanel extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='ActionPanel'>
        <RaisedButton primary label='Reload' onClick = { this.reloadItems } />
        <RaisedButton primary label='Add' onClick = { this.showAddTodoForm } />
      </div>
    );
  }

  reloadItems = () => {
    this.todosIns.setState({ isLoading: true });
    this.todosIns.props.dispatch(getTodos()).then(() => {
      this.todosIns.setState({ isLoading: false });
    });
  };

  showAddTodoForm = () => {
    this.todosIns.setState({ showAddTodoForm: true });
  }
};

ActionPanel.contextTypes = {
  todosIns: PropTypes.object
};

export default ActionPanel;