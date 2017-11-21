import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from 'js/store';
import App from 'js/containers/App/App';


ReactDOM.render(
	<Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>, document.getElementById('root')
);