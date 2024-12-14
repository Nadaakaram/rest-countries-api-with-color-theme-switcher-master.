import './App.css';
import {ThemeProvider} from './components/ThemeContext'
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import CardInside from './components/CardInside';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import axios from 'axios';


function App() {
  // const [countries, setCountries] = useState([]);
  const location = useLocation();

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get("https://restcountries.com/v3.1/all");
  //       const data = response.json();
  //       const countryName = data.map((country) => country.name.common);
  //       setCountries(countryName);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //     }
  //   };
  //   fetchCountries();
  // }, []);

  return (
    <>
      <Header />
        {location.pathname === '/' && <Searchbar/>}
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/cardinside/:countryName' element={<CardInside/>}/>
      </Routes>
    </>

  )
}

function Root(){
  return (
    <Router>
      <ThemeProvider>
      <App/>
      </ThemeProvider>
    </Router>
  )
}

export default Root;
