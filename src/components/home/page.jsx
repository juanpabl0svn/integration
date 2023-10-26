import React from 'react';
import { Link } from "react-router-dom";
import './home.css'; // Archivo CSS para los estilos
import {Routes, Route, useNavigate} from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const navigateToEcommerce = () => {
    navigate('/store');
  };

  const navigateToRoulette = () => {
    navigate('/ruleta');
  };

  const navigateToTournament = () => {
    navigate('/torneos');
  };

  const navigateToZodiac = () => {
    window.location.replace('https://multihexagon.github.io/zodiaco/#0');
  };

  return (
    <div className='superwrapper'>
        <div className='wrapper'>
            <button className='one' onClick={navigateToZodiac}> Conoce tu horoscopo aquí </button>
            <button className='two' onClick={navigateToRoulette}></button>
            <button className='three' onClick={navigateToEcommerce}></button>
            <button className='four'></button>
            <button className='five' onClick={navigateToTournament}></button>
            <button className='six'></button>
            <button className='seven'>@ Lenguajes y paradigmas 2023-2</button>

        </div>
    </div>

  );
}

export default Home;
