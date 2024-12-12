import './App.css';
import {ThemeProvider} from './components/ThemeContext'
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import CardInside from './components/CardInside';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
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
