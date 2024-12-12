import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from './ThemeContext';


const Header = () => {
  const [theme, toggleTheme] = useTheme();


  return (
    <div className={`header $ {theme}`}>
      <h2>Where in the world?</h2>
      <div className='dark-mood'>
        <FontAwesomeIcon icon={faMoon} />
        <button className='theme-button' onClick={toggleTheme}>Dark Mode
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
    </div>
  )
}

export default Header