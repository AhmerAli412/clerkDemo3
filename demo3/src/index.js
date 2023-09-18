// index.js
import React from 'react';
import { render } from 'react-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

render(
  <ClerkProvider publishableKey={publishableKey}>
    <App />
  </ClerkProvider>,
  document.getElementById('root')
);
