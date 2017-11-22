import React, { Component } from 'react';

import { CircularProgress } from 'material-ui/Progress';

import './Loader.css';


export default class Loader extends Component {
  render() {
    if (!this.props.isLoading) {
      return (
        <div>{ this.props.children }</div>
      );
    } else {
      return (
        <div className='Loader'>
          <CircularProgress />
        </div>
      );
    }
  }
};