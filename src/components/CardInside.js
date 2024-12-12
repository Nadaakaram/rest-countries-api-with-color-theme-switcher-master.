import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




const CardInside = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountry();
  }, [countryName]);

  if (!country) {
    return <p>Country data not found. Please go back and select a country.</p>;
  }

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies).map(curr => curr.name).join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className="inside-card">
      <div className="left-sec">
        <div className="button">
          <FontAwesomeIcon icon={faArrowLeft} />
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <img className="flag-img" src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="right-sec">
        <h1>{country.name.common}</h1>
        <div className="grid">
          <p><strong>Native Name: </strong>{nativeName}</p>
          <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
          <p><strong>Region: </strong>{country.region}</p>
          <p><strong>Sub Region: </strong>{country.subregion}</p>
          <p><strong>Capital: </strong>{country.capital ? country.capital[0] : "N/A"}</p>
          <p><strong>Currencies: </strong>{currencies}</p>
          <p><strong>Languages: </strong>{languages}</p>
          <p><strong>Border Countries: </strong>{country.borders ? country.borders.join(", ") : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default CardInside;