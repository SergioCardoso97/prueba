import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/header/HeaderComponent';
import HomeComponent from './components/home/HomeComponent';
import CharactersComponent from './components/characters/CharactersComponent'
import EpisodesComponent from './components/episodes/EpisodesComponent'
import MadeByComponent from './components/madeBy/MadeByComponent'
import FooterComponent from './components/footer/FooterComponent'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/prueba' exact element={<HomeComponent/>} />
        <Route path='/characters' element={<CharactersComponent/>} />
        <Route path='/episodes' element={<EpisodesComponent/>} />
        <Route path='/madeby' element={<MadeByComponent/>} />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
      
    </React.Fragment>
  );
}

export default App;
