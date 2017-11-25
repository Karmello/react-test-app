import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from 'material-ui/List';

import { Loader, Todo } from 'js/components';
import './TodoList.css';


class TodoList extends Component {

  render() {

    const { isTodoListLoaderShown } = this.props;

    return (
      <Loader isShown={isTodoListLoaderShown}>
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
    todos: state.todos.data,
    isTodoListLoaderShown: state.visibility.TodoListLoader
  };
}

export default connect(mapStateToProps)(TodoList);