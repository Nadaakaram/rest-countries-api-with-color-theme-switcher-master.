import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Searchbar = ({ data }) => {
  const [search, setSearch] = useState('');
  const [countries , setCountries] = useState([]);


  const fetchSearch = (value) => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
      .then((json) => {
      const results = json.filter((country) => {
        return value && country.name.common.toLowerCase().includes(value.toLowerCase())
      });
        setCountries(results);
    }).catch((error) => console.error("Error fetching data", error));
  }


  const handleSearchChange = (value) => {
    setSearch(value);
    fetchSearch(value);
  };


  return (
    <div className='searchbar'>
      <div className='input-group'>
        <span className='input-group-text'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
        </span>
        <input className='searchinput' type="text" placeholder="Search for a country..." value={search} onChange={(e) => handleSearchChange(e.target.value)} />
        <ul>
          {countries.map((country, index) => (
            <li key={index}>{country.name.common} </li>
          ))}
        </ul>
      </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Region
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href='/' >Africa</a></li>
            <li><a className="dropdown-item" href='/'>America</a></li>
            <li><a className="dropdown-item" href='/'>Asia</a></li>
            <li><a className="dropdown-item" href='/'>Europe</a></li>
            <li><a className="dropdown-item" href='/'>Oceania</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Searchbar