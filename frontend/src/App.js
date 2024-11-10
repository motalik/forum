import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import HomePage from './pages/HomePage'; // Your existing HomePage component
import LoginPage from './pages/LoginPage'; // New LoginPage component
import SignUpPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage'; 
// New SignUpPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
