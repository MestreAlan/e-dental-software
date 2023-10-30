import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/components/Header.module.css';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    setCollapsed(true);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 650);
      // Fecha o navbar quando a tela não for mobile
      if (!isMobile) {
        closeNavbar();
      }
    };

    // Verifica a largura da tela após a renderização inicial e sempre que a janela for redimensionada
    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, [isMobile]);

  if (!isMobile) {

    const toggleCollapse = () => {
      setCollapsed(!isCollapsed);
    };
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/my-favicon.ico" />
        <title>Seu Título da Página</title>
      </Head>

      <nav className={`navbar navbar-light bg-light ${styles.naveBarHorizontal}`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
            E-Odonto-Software
          </a>

          {!isMobile ? (
            <div className={`text-right ${styles.navIcons}`}>
              <a className="" href="#">
                <Image
                  src="/images/correioA.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </a>
              <a className="" href="#">
                <Image
                  src="/images/sino_notificacaoA.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </a>
              <a className="" href="#">
                <Image
                  src="/images/user_logo2A.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          ) : (
            <>
              <button
                className={`navbar-toggler ${styles.menuButton}`}
                type="button"
                onClick={toggleNavbar}
              >
                <span className={`navbar-toggler-icon ${styles.menuIcon}`}></span>
              </button>

            </>
          )}
        </div>
      </nav>

      <div className={`mobileMenu collapse navbar-collapse ${styles.navIcons} ${collapsed ? '' : 'show'}`}>
        <ul className={`navbar-nav ${styles.navList}`}>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image
                src="/images/correioA.png"
                alt="Correio"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image
                src="/images/sino_notificacaoA.png"
                alt="Notificações"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Image
                src="/images/user_logo2A.png"
                alt="Perfil"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
      {/* Conteúdo da sua página aqui */}
    </div>
  );
};

export default Header;
