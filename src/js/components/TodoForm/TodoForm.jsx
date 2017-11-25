import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';

import { postOne, putOne } from 'js/api';
import { show, hide } from 'js/actions';
import './TodoForm.css';


class TodoForm extends Component {

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit = { handleSubmit(this.onSubmit) }>
        <div>
          <Field
            className='TodoForm-description'
            component='textarea'
            name='description'
            placeholder='Description'
          />
        </div>
        <br />
        <div className='TodoForm-btnsContainer'>
          <Button raised color='default' type='button' onClick = { this.onCancel }>Cancel</Button>
          <Button raised color='primary' type='submit'>Submit</Button>
        </div>
      </form>
    );
  }

  onSubmit = (values) => {
    
    const cb = () => { this.props.dispatch(hide('TodoListLoader')); }

    this.props.dispatch(hide('TodoDialog'));
    this.props.dispatch(show('TodoListLoader'));
    
    if (this.props.activeTodoIndex !== null) {
      this.props.dispatch(putOne(this.props.activeTodoIndex, { ...values })).then(cb);

    } else {
      this.props.dispatch(postOne({ ...values, status: 0 })).then(cb);
    }
  };

  onCancel = () => {
    this.props.dispatch(hide('TodoDialog'));
  };
};

const mapStateToProps = (state) => {
  return {
    activeTodoIndex: state.todos.activeTodoIndex
  };
};

TodoForm = connect(mapStateToProps)(TodoForm);

export default reduxForm({ form: 'TodoForm' })(TodoForm);