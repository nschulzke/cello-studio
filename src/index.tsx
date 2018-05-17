import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (<Router>
    <Route component={App} />
  </Router>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
