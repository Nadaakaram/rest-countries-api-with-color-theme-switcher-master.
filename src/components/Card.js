import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Card = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  

  const fetchFilteredCountries = (selectedRegion) => {
    if (selectedRegion === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.region &&
        country.region.toLowerCase() === selectedRegion.toLowerCase());
      setFilteredCountries(filtered);
    }
  }

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    fetchFilteredCountries(selectedRegion); 
  };



  const fetchSearch = (value) => {
        const results = countries.filter((country) => 
            country.name.common.toLowerCase().includes(value.toLowerCase())
          );
        setFilteredCountries(results);
      
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    fetchSearch(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response.data);
        setCountries(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  const cardStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <>
      <div className="searchbar">
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </span>
          <input
            className="searchinput"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className="dropdown">
          <select className="dropdown-items" onChange={handleRegionChange} value={region}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

      </div>
      <div className="card-container row-cols-4">
        {(filteredCountries.length > 0 ? filteredCountries : countries).map(
          (country) => (
            <div className="card" key={country.cca3}>
              <img
                src={country.flags.png}
                className="card-img-top"
                alt={country.name.common}
              />
              <div className="card-body">
                <Link
                  to={`/cardinside/${country.name.common}`}
                  style={cardStyle}
                >
                  <h5 className="card-title" key={country.name.common}>
                    {country.name.common}
                  </h5>
                </Link>

                <p className="card-text" key={country.population}>
                  <span className="title">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p className="card-text" key={country.region}>
                  <span className="title">Region: </span>
                  {country.region}
                </p>
                <p className="card-text">
                  <span className="title">Capital: </span>
                  {country.capital ? country.capital[0] : "N/A"}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Card;
