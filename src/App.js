import React, { Suspense } from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import User from './components/User';

function App() {
  return (
    <div className="container" style={{ padding: '16px 0'}}>
      <header className="App-header">
        <h1 style={{ textAlign: 'center' }} className="title">React Suspense Demo</h1>
      </header>
      <div>
        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <User />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
