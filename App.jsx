import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div className="main">
      <Navbar />
      <MainContent />
      <LoginForm />
    </div>
  );
}

export default App;
