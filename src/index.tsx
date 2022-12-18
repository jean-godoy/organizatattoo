import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/form.css';
import './styles/list.css';
import './styles/button.css';
import './styles/modalDetails.css';
import './styles/modalDetails.css';
import './styles/modal.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { ToastifyProvider } from './contexts/Toastify/ToastifyProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastifyProvider>
          <App />
        </ToastifyProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
