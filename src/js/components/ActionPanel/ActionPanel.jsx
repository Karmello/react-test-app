import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import './ActionPanel.css';


class ActionPanel extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='ActionPanel'>
        <Button raised color='primary' onClick = { this.showAddTodoForm }>Add</Button>
      </div>
    );
  }

  showAddTodoForm = () => {
    if (!this.todosIns.state.isLoading) {
      this.todosIns.setState({ showAddTodoForm: true });
    }
  }
};

ActionPanel.contextTypes = {
  todosIns: PropTypes.object
};

export default ActionPanel;