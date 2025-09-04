// Import the React library to build user interfaces
import React from 'react';
// Import ReactDOM to handle rendering React components to the browser
import ReactDOM from 'react-dom/client';
// Import the CSS file for global styles
import './index.css';
// Import the main App component
import App from './App';
// Import a tool for measuring app performance (optional)
import reportWebVitals from './reportWebVitals';

// Find the HTML element with id 'root' in public/index.html
// This is where our React app will be displayed
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component inside the 'root' element
// <React.StrictMode> helps catch potential problems in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This function can measure performance of your app (optional)
// You can ignore this for now as a beginner
reportWebVitals();
