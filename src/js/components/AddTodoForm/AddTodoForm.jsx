import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { postItem } from 'js/api';
import './AddTodoForm.css';


class AddTodoForm extends Component {

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
    const todos = this.props.todos;
    todos.setState({ isLoading: true, showAddTodoForm: false });
    postItem({ ...values, status: 0 }, (data) => {
      todos.setState((prevState) => {
        return {
          isLoading: false,
          showAddTodoForm: false,
          ...prevState.items.push(data)
        }
      });
    });
  };

  onCancel = () => {
    this.props.todos.setState({ showAddTodoForm: false });
  };
};

export default reduxForm({ form: 'AddTodoForm' })(AddTodoForm);