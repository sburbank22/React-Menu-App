import React from 'react';
import ReactDOM from 'react-dom/client';  // Required for React 18 and above
import App from './App';  // Import the main App component
import './index.css';  // Optional: Add your CSS styles here

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(<App />);  // Render the App component
