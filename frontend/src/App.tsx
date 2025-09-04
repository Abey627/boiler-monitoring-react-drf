// Import the React library, which lets you build user interfaces
import React from 'react';
// Import the logo image to display in the app
import logo from './logo.svg';
// Import the CSS file for styling the app
import './App.css';

// This is the main App component
// A component is like a reusable piece of the UI
function App() {
  // The return statement tells React what to show on the screen
  return (
    // This is a div element with a CSS class 'App'
    <div className="App">
      {/* The header section of the app */}
      <header className="App-header">
        {/* Show the logo image at the top */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Show a paragraph with instructions */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* This is a link to the React website */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Export the App component so it can be used in other files
export default App;
