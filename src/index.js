import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Sentry from '@sentry/browser';
import ErrorBoundary from './ErrorBoundary';
import { version } from '../package.json';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: "https://c642a12ecf494c7292ef5ec50aa6fd31@sentry.io/1339509",
    release: version,
  });
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
registerServiceWorker();
