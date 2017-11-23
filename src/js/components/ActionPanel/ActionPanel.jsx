import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';

import { SHOW } from 'js/actions';
import './ActionPanel.css';


class ActionPanel extends Component {

  render() {

    const { isTodoListLoaderShown } = this.props;

    if (!isTodoListLoaderShown) {
      return (
        <div className='ActionPanel'>
          <Button
            raised
            color='primary'
            onClick = { () => { this.props.dispatch(SHOW('AddTodoDialog')) } }
          >Add</Button>
        </div>
      );
    }
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    isTodoListLoaderShown: state.visibility.TodoListLoader
  };
}

export default connect(mapStateToProps)(ActionPanel);