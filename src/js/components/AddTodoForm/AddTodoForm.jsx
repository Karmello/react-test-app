import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';

import { addTodo } from 'js/api';
import { SHOW, HIDE } from 'js/actions';
import './AddTodoForm.css';


class AddTodoForm extends Component {

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit = { handleSubmit(this.onSubmit) }>
        <div>
          <Field
            className='AddTodoForm-description'
            component='textarea'
            name='description'
            placeholder='Description'
          />
        </div>
        <br />
        <div className='AddTodoForm-btnsContainer'>
          <Button raised color='default' type='button' onClick = { this.onCancel }>Cancel</Button>
          <Button raised color='primary' type='submit'>Submit</Button>
        </div>
      </form>
    );
  }

  onSubmit = (values) => {
    this.props.dispatch(HIDE('AddTodoDialog'));
    this.props.dispatch(SHOW('TodoListLoader'));
    this.props.dispatch(addTodo({ ...values, status: 0 })).then(() => {
      this.props.dispatch(HIDE('TodoListLoader'));
    });
  };

  onCancel = () => {
    this.props.dispatch(HIDE('AddTodoDialog'));
  };
};

const mapStateToProps = (state) => { return state; };

AddTodoForm = connect(mapStateToProps)(AddTodoForm);

export default reduxForm({ form: 'AddTodoForm' })(AddTodoForm);