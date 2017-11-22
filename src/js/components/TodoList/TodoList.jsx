import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from 'material-ui/List';

import { Loader, Todo } from 'js/components';
import './TodoList.css';


class TodoList extends Component {

  render() {

    const { isTodoListLoading } = this.props;

    return (
      <Loader isLoading={isTodoListLoading}>
        <div className='TodoList-itemsContainer'>
          <List>{this.renderItems()}</List>
        </div>
      </Loader>
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
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isTodoListLoading: state.loader.TodoList.isLoading
  };
}

export default connect(mapStateToProps)(TodoList);