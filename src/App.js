import './App.css';
import {ThemeProvider} from './components/ThemeContext'
import Header from './components/Header';
import Card from './components/Card';
import CardInside from './components/CardInside';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {

  return (
    <>
      <Header />
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
