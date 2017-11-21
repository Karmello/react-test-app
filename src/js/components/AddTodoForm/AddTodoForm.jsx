import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { addTodo } from 'js/api';

import './AddTodoForm.css';


class AddTodoForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.todosIns = context.todosIns;
  }

  render() {
    return (
      <div className='AddTodoForm'>
        <form onSubmit = { this.props.handleSubmit(this.onSubmit) }>
          <div>
            <label>Description</label>
            <div>
              <Field name='description' component='textarea' type='text' />
            </div>
          </div>
          <br />
          <div>
            <button type='button' onClick = { this.onCancel }>Cancel</button>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit = (values) => {
    
    this.todosIns.setState({ isLoading: true });
    
    this.props.dispatch(addTodo({ ...values, status: 0 })).then(() => {
      this.todosIns.setState({ isLoading: false, showAddTodoForm: false });
    });
  };

  onCancel = () => {
    this.todosIns.setState({ showAddTodoForm: false });
  };
};

AddTodoForm.contextTypes = {
  todosIns: PropTypes.object
};

const mapStateToProps = (state) => { return state; };

AddTodoForm = connect(mapStateToProps)(AddTodoForm);

export default reduxForm({ form: 'AddTodoForm' })(AddTodoForm);