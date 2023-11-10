import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Menu_superior.module.css';

const Menu_superior = () => {
  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleButtonClick = () => {
    // Inverta o estado do botão quando ele for clicado
    setIsButtonActive(!isButtonActive);
  };

  return (
    <div>
      <div className={styles.containerPrincipal}>
        <div className={styles.menu}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center`} >
                <button className={`${styles.botao_menu_superior}`}>Agenda</button>
                <button
                  className={`${styles.botao_menu_superior} ${isButtonActive ? styles.active : ''}`}
                  onClick={handleButtonClick}
                >
                  Pacientes
                </button>
                <button className={`${styles.botao_menu_superior}`}>Relatórios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_superior;
