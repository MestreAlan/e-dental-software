import React, { useState } from 'react';
import Header from '../components/Header';
import Corpo from '../components/Corpo';
import Rodape from '../components/Rodape';
import styles from '../../styles/components/Login.module.css';

const Home = () => {


  return (
    <div className="container-fluid">
      <Header />
      <Corpo />

      <Rodape />

    </div>
  );
};

export default Home;
