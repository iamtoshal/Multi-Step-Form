import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StepContext from './StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StepContext>
);

