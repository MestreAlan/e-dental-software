import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Barra_superior.module.css';

const Menu_superior = () => {

  return (
    <div>
      <div className={styles.containerPrincipal}>
        <div className={styles.menu}>
          <div className="container">
            <div className="row">
              <div className={`col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1`} >
                <a className={`${styles.img_pessoa_container}`} href="#">
                  <Image
                    src="/images/user_logo1.png"
                    src_original="/images/user_logo1.png"
                    alt="Selecione uma imagem"
                    id="img_pessoa_photo"
                    className={`${styles.img_pessoa_photo}`}
                    width={100} // Defina a largura desejada aqui
                    height={100} // Defina a altura desejada aqui
                  />
                </a>
              </div>
              <div className={`col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11`} >
                <div className={`row ${styles.span_superior_pessoa}`}>
                  <span>Rochelly da Silva Rodrigues Santana</span>
                </div>
                <div className={`row ${styles.span_inferior_pessoa}`}>
                  <div className={`col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11`}>
                    <a className={``} href="#">
                      <Image
                        src="/images/whatsapp_logo.png"
                        alt="whatsapp"
                        width={25} // Defina a largura desejada aqui
                        height={25} // Defina a altura desejada aqui
                      />
                    </a>

                    <span>(84) 9 8765-8838</span> <span>CPF: 089.258.244-85</span> <span>34 anos</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center`} >
                <button className={` ${styles.botao_menu_pessoa}`}>Dados gerais</button>
                <button className={` ${styles.botao_menu_pessoa}`}>Prontuário</button>
                <button className={` ${styles.botao_menu_pessoa}`}>Documentos</button>
                <button className={` ${styles.botao_menu_pessoa}`}>Anotações</button>
                <button className={` ${styles.botao_menu_pessoa}`}>Orçamentos</button>
                <button className={` ${styles.botao_menu_pessoa}`}>Financeiro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Menu_superior;
