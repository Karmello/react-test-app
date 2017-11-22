import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';

import { SHOW_DIALOG } from 'js/actions';
import './ActionPanel.css';


class ActionPanel extends Component {

  render() {

    const { isTodoListLoading } = this.props;

    if (!isTodoListLoading) {
      return (
        <div className='ActionPanel'>
          <Button
            raised
            color='primary'
            onClick = { () => { this.props.dispatch(SHOW_DIALOG('AddTodoDialog')) } }
          >Add</Button>
        </div>
      );
    }
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    isTodoListLoading: state.loader.TodoList.isLoading,
  };
}

export default connect(mapStateToProps)(ActionPanel);