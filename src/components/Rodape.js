import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Rodape.module.css';

const Rodape = () => {
  return (
    <div>
      {/* Primeira Linha */}
      <div className={`navbar navbar-dark ${styles.barHorizontal}`}>
        {/*Linha 1*/}

        <div className="container">

          <div className={`text-right ${styles.span}`}>
            <span className={`${styles.span}`}>Contato: (84) 9 8765-8838</span>
            <p>
              <span className={`${styles.span}`}>E-mail: contato@santech.com.br</span>
            </p>
          </div>

          <div className={`text-right ${styles.span}`}>
            <span>Siga-nos em nossas redes sociais</span>
            <p className={`text-right ${styles.redes_sociais}`}>
              <a className="navbar-brand" href="#">
                <Image
                  src="/images/instagram.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </a>
              <a className="navbar-brand" href="#">
                <Image
                  src="/images/facebook.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </a>
            </p>
          </div>
        </div>




        {/*Linha 2*/}
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <span className={`span ${styles.span}`}>empowered by E-Odonto-Software</span>
          </a>

          <div className={`text-right ${styles.span}`}>
            <span>@Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
