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
    dsn: "https://a3f062a9ad00480d9645b7d539966693@sentry.io/1339362",
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
