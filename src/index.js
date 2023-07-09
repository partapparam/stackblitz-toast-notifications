import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastProvider } from './Toast/ToastProvider'

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
