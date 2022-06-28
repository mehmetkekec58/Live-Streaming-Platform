import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/app/home/Home';
import Navi from './components/app/navi/Navi';
import Search from './pages/app/search/Search';


function App() {
  return (
    <div>
    <Navi/>
    <Routes>
      <Route path='' element={<Home />} /> 
      <Route path='search' element={<Search/>} />
    </Routes>
    </div>
  );
}

export default App;
