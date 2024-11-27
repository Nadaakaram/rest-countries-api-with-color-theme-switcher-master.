import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className='header'>
      <h2>Where in the world?</h2>
      <div className='dark-mood'>
        <FontAwesomeIcon icon={faMoon} />
        <button className='theme-button' onClick={toggleDarkMode}>Dark Mode</button>
      </div>
    </div>
  )
}

export default Header