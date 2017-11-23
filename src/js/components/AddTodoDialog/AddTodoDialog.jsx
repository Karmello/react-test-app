import React, { Component } from 'react';

import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import { AddTodoForm } from 'js/components';


function Transition(props) {
  return <Slide direction='right' {...props} />;
}

class AddTodoDialog extends Component {

  render() {
    return (
      <Dialog
        open = {this.props.isShown}
        transition = {Transition}
      >
        <DialogTitle>New todo</DialogTitle>
        <DialogContent>
          <AddTodoForm />
        </DialogContent>
      </Dialog>
    );
  }
};

export default AddTodoDialog;