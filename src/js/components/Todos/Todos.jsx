import React, { Component } from 'react';
import { hardCodedItems, getItems } from 'js/api';
import Todo from 'js/components/Todo/Todo';
import ActionPanel from 'js/components/ActionPanel/ActionPanel';
import AddTodoForm from 'js/components/AddTodoForm/AddTodoForm';
import './Todos.css';


const initialState = {
  isLoading: true,
  showAddTodoForm: false,
  items: hardCodedItems
};

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    getItems(this.state.items, (data) => {
      this.setState({ items: data, isLoading: false });
    });
  }

  render() {
    return (
      <div className='Todos'>
        <div className='Todos-header'>
          <h2>Todos { !this.state.isLoading && <span> ({ this.state.items.length })</span> }</h2>
        </div>
        {
          this.state.isLoading ? 'Loading ...' :
          <div>
            <div className='Todos-content'>{ this.renderItems(<Todo/>) }</div>
            <br />
            <ActionPanel todos = {this} initialState = {initialState} />
            { this.state.showAddTodoForm && <AddTodoForm todos = {this} /> }
          </div>
        }
      </div>
    );
  }

  renderItems = () => {
    const content = [];
    for (const item of this.state.items) {
      content.push(
        <Todo
          key = {content.length + 1}
          number = {content.length + 1}
          item = {item}
          todos = {this}
        />
      );
    }
    return content;
  }
};

export default Todos;