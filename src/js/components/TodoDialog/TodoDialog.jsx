import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import { TodoForm } from 'js/components';
import { setActiveTodo } from 'js/actions';


function Transition(props) { return <Slide direction='right' {...props} />; }

class TodoDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.todos.activeTodoIndex !== null) {
      this.setState({
        title: `Editing todo ${nextProps.todos.activeTodoIndex + 1}`,
        initialValues: { description: nextProps.todos.data[nextProps.todos.activeTodoIndex].description }
      });

    } else {
      this.setState({
        title: `New todo ${nextProps.todos.data.length + 1}`,
        initialValues: null
      });
    }
  }

  render() {
    return (
      <Dialog
        open = {this.props.isShown}
        transition = {Transition}
        onExited = {this.onExited}
      >
        <DialogTitle>{this.state.title}</DialogTitle>
        <DialogContent>
          <TodoForm initialValues = {this.state.initialValues} />
        </DialogContent>
      </Dialog>
    );
  }

  onExited = () => {
    this.props.dispatch(setActiveTodo(null));
  }
};

const mapStateToProps = (state) => { return { todos: state.todos } }
export default connect(mapStateToProps)(TodoDialog);