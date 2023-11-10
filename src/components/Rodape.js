import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Rodape.module.css';

const Rodape = () => {
  return (
    <div>
      {/* Primeira Linha */}
      <div className={`${styles.barHorizontal}`}>
        {/*Linha 1*/}

        <div className="container">

          <div className="row">

            <div className="d-flex align-items-center justify-content-center col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <a className="navbar-brand" href="#">
                <Image
                  src="/clientes/orofacial_preto.png"
                  alt="Logo"
                  width={300}
                  height={100}
                />
              </a>
            </div>

            <div className={`text-center ${styles.span} col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4`}>
              <p className={`${styles.redes_sociais}`}>
                <div className={`text-justify`}>
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
                </div>
              </p>

              <p>
                <span className={`${styles.span}`}>Contato: </span>
                <Image
                  src="/images/whatsapp_logo_verde.png"
                  alt="Logo"
                  width={17}
                  height={17}
                />
                <span className={`${styles.span}`}> (84) 9 8765-8838</span>
              </p>
              <p>
                <span className={`${styles.span}`}>E-mail: contato@santech.com.br</span>
              </p>
              <p>
                <span>@Todos os direitos reservados</span>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <a className="navbar-brand" href="#">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className={`span ${styles.span}`}>empowered by E-Odonto-Software</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
