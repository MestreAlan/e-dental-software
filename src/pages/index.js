// pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Sidebar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {/* Conteúdo da página */}
        </div>
      </div>
    </div>
  );
};

export default Home;
