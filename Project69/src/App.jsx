import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
