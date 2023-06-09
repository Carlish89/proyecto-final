import React from 'react';
import { Button } from 'react-bootstrap';
import BGImgae from '../components/marketplace-20210806-feature-bg-sell-on-s.webp'
import "../styles/home.css"
import { Link } from 'react-router-dom';
export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {
  
  return (
    <div className='home' style={{ backgroundImage: `url('${BGImgae}')` }}>
      <div className='tittle'>
        <h1> <b>Bienvennido a Hardware-Place</b> </h1>
      </div>
      <div className='buttons'>
        <Link to="/productos"><Button className='buton bg-primary'><b>Entra en el Sitio</b></Button></Link>
        <Link to="/login"><Button className='buton bg-primary'><b>Inicia Secion</b></Button></Link>
        <Link to="/registro"><Button className='buton bg-primary'><b>Registrate</b></Button></Link>      
        </div>
    </div>
  );
};

export default Home;