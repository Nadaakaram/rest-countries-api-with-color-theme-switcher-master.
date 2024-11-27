import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='input-group'>
        <span className='input-group-text'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
        </span>
        <input className='searchinput' type="text" placeholder="Search for a country..."/>
      </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Region
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href>Africa</a></li>
            <li><a className="dropdown-item" href>America</a></li>
            <li><a className="dropdown-item" href>Asia</a></li>
            <li><a className="dropdown-item" href>Europe</a></li>
            <li><a className="dropdown-item" href>Oceania</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Searchbar