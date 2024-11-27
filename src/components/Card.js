import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'



const Card = () => {
  const cardStyle={
    color:'black',
    textDecoration:'none',
  };

    return (
      <div className="card-container row-cols-4">
        {data.map((country)=> (

          <div className="card" key={country.name} >
          <img src={country.flags.png} className="card-img-top" alt={country.name}/>
          <div className="card-body" >
            <Link to={`/cardinside/${country.name}`}
            style={cardStyle}>

            <h5 className="card-title" key={country.name}>{country.name}</h5>
            </Link>

            <p className="card-text" key={country.population}><span className='title'>population: </span>{country.population}</p>
            <p className="card-text" key={country.region}><span className='title'>Region: </span>{country.region}</p>
            <p className="card-text" key={country.capital}><span className='title'>capital: </span>{country.capital}</p>
  
          </div>
        </div>

      ))}

  
      </div>
    )
  

}

export default Card
