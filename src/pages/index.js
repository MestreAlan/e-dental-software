import React, { useState } from 'react';
import Header from '../components/Header';
import Corpo from '../components/Corpo';
import Rodape from '../components/Rodape';
import Menu_superior from '../components/Menu_superior';
import Barra_superior from '../components/Barra_superior';
import styles from '../../styles/components/Login_modal.module.css';

const Home = () => {


  return (
    <div className="container-fluid">
      <Header />
      <Menu_superior />
      <Barra_superior />
      <Corpo />

      <Rodape />

    </div>
  );
};

export default Home;
