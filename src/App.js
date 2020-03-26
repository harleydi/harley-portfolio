import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Branding from './components/Branding';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Branding />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
