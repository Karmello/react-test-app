import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Button from 'material-ui/Button';

import { postOne } from 'js/api';
import { show, hide } from 'js/actions';
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
    this.props.dispatch(hide('AddTodoDialog'));
    this.props.dispatch(show('TodoListLoader'));
    this.props.dispatch(postOne({ ...values, status: 0 })).then(() => {
      this.props.dispatch(hide('TodoListLoader'));
    });
  };

  onCancel = () => {
    this.props.dispatch(hide('AddTodoDialog'));
  };
};

const mapStateToProps = (state) => { return state; };

AddTodoForm = connect(mapStateToProps)(AddTodoForm);

export default reduxForm({ form: 'AddTodoForm' })(AddTodoForm);