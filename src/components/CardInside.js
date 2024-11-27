import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const CardInside = () => {
  const {name} = useParams();
  const navigate = useNavigate();


  const country  = data.find((c)=> c.name === name);
  if (!country) {
    return <p>Country data not found. Please go back and select a country.</p>
  }

  const currencies = country.currencies
    ? country.currencies.map((currency) => currency.name).join(', ')
    : 'N/A';

  const languages = country.languages
    ? country.languages.map((language) => language.name).join(', ')
    : 'N/A';

  const borders = country.borders
  ? country.borders.join(" , ") : 'N/A' 
  
  return (
    <div className='inside-card'>
      <div className='left-sec'>
        <div className='button'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <img className='flag-img' src={country.flags.png} alt={country.name}/>

      </div>
      <div className='right-sec'>
        <h1>{country.name}</h1>
        <div className='grid'>
          <p><strong>Native Name: </strong>{country.nativeName}</p>
          <p><strong>population </strong>{country.population.toLocaleString()}</p>
          <p><strong>Region: </strong>{country.region}</p>
          <p><strong>Sub Region: </strong>{country.subregion}</p>
          <p><strong>Capital: </strong>{country.capital}</p>
          <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
          <p><strong>Currencies: </strong>{currencies}</p>
          <p><strong>Languages: </strong>{languages}</p>
          <p><strong>Border Countries: </strong>{borders}</p>
        </div>
      </div>
    </div>
  )
}

export default CardInside;