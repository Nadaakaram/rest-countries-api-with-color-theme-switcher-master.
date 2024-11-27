import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import CardInside from './components/CardInside';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
        {location.pathname === '/' && <Searchbar/>}
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/cardinside/:name' element={<CardInside/>}/>
      </Routes>
    </div>

  )
}

function Root(){
  return (
    <Router>
      <App/>
    </Router>
  )
}

export default Root;
