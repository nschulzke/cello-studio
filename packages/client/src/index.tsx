import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'connectors/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from 'store/store';

ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
