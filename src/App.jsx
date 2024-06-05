// App.jsx
import { useState } from 'react';
import ssLogo from './assets/Sa2.png';
import './App.css';

function App() {
  const [linksVisible, setLinksVisible] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
    setLogoClicked(true);
    setTimeout(() => {
      setLogoClicked(false);
    }, 500);
  };

  return (
    <>
      <div className="background-container">
        <img className='bgImg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <nav className="navbar">
        <div className={`links left ${linksVisible ? 'visible' : ''}`}>
          <a className="nav-item link2" href="#home">Home</a>
          <a className="nav-item link1" href="#about">About</a>
        </div>
        <div className="logo" onClick={toggleLinks}>
          <img src={ssLogo} alt="Logo" className={logoClicked ? 'clicked' : ''} />
        </div>
        <div className={`links right ${linksVisible ? 'visible' : ''}`}>
          <a className="nav-item link3" href="#services">Services</a>
          <a className="nav-item link4" href="#contact">Contact</a>
        </div>
      </nav>

      <div className="content">
        <h1>Welcome to our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet aliquam odio, eget gravida turpis posuere nec.</p>
        <button>Contact Us</button>
      </div>
    </>
  );
}

export default App;
