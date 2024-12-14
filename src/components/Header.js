import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from './ThemeContext';


const Header = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className='header'>
      <h2>Where in the world?</h2>
      <div className='dark-mood'>
        <FontAwesomeIcon icon={faMoon} className='moon-icon'/>
        <button className='theme-button' onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  )
}

export default Header