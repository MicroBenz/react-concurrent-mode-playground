import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Normal mode
// ReactDOM.render(<App />, document.getElementById('root'));

// Suspense mode
ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />);
