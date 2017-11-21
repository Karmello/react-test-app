import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getTodos } from 'js/api';


class ActionPanel extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='ActionPanel'>
        <button onClick = { this.reloadItems }>Reload</button>
        <button onClick= { this.showAddTodoForm }>Add</button>
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