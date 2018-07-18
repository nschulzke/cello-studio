import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'app/App';
import store from 'app/shared/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>),
  document.getElementById('root'),
);
registerServiceWorker();
