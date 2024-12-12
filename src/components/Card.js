import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';




const Card = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);




  const cardStyle={
    color:'black',
    textDecoration:'none',
  };


    return (
      <div className="card-container row-cols-4">
        {countries.map((country)=> (

          <div className="card" key={country.cca3} >
          <img src={country.flags.png} className="card-img-top" alt={country.name.common}/>
          <div className="card-body" >
            <Link to={`/cardinside/${country.name.common}`}
            style={cardStyle}>

            <h5 className="card-title" key={country.name.common}>{country.name.common}</h5>
            </Link>

            <p className="card-text" key={country.population}><span className='title'>Population: </span>{country.population.toLocaleString()}</p>
            <p className="card-text" key={country.region}><span className='title'>Region: </span>{country.region}</p>
              <p className="card-text"><span className='title'>Capital: </span>{country.capital ? country.capital[0] : 'N/A'}</p>
  
          </div>
        </div>

      ))}

  
      </div>
    )
  

}

export default Card
