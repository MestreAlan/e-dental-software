import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ModalLogin from './Login_modal';
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
      } else {

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Função para atualizar a posição do elemento mobileMenu
    const atualizarPosicaoElemento = () => {
      const elementoParaPosicionar = document.querySelector('.mobileMenu');
      const button = document.querySelector('.menuButtonCollapse');

      if (elementoParaPosicionar && button) {
        const buttonPosition = button.getBoundingClientRect();
        const left = buttonPosition.left;
        const top = buttonPosition.bottom;

        elementoParaPosicionar.style.position = 'absolute';
        elementoParaPosicionar.style.left = `${left - 8.5}px`;
        elementoParaPosicionar.style.top = `${top}px`;
      }
    };

    // Função para verificar o carregamento de .mobileMenu
    const verificarCarregamentoMenuButtonCollapse = () => {
      const elementoParaPosicionar = document.querySelector('.menuButtonCollapse');
      if (elementoParaPosicionar) {
        if (elementoParaPosicionar.dataset.loaded !== 'true') {
          // O elemento .mobileMenu ainda não foi carregado
          // Execute as ações necessárias aqui
          elementoParaPosicionar.dataset.loaded = 'true';
          atualizarPosicaoElemento();
        }
      }
    };

    // Adicione um MutationObserver para observar as mudanças na árvore DOM
    const observer = new MutationObserver(verificarCarregamentoMenuButtonCollapse);
    const config = { childList: true, subtree: true };

    // Inicie a observação na raiz do documento ou em um elemento pai apropriado
    observer.observe(document, config);

    // Adicionar um event listener para o evento de redimensionamento da janela
    window.addEventListener('resize', atualizarPosicaoElemento);
    // Verifique o carregamento de .mobileMenu após o evento load
    window.addEventListener('load', verificarCarregamentoMenuButtonCollapse);
    // Adicionar um event listener para o evento DOMContentLoaded
    window.addEventListener('DOMContentLoaded', atualizarPosicaoElemento);

    // Chamar a função de atualização da posição quando o componente montar
    //atualizarPosicaoElemento();
    // Remover o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', atualizarPosicaoElemento);
      window.removeEventListener('DOMContentLoaded', atualizarPosicaoElemento);
      observer.disconnect();
      window.removeEventListener('load', verificarCarregamentoMenuButtonCollapse);
    };
  }, []);

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
              src="/clientes/orofacial.png"
              alt="Logo"
              width={230}
              height={70}
            />
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
              <a id="user_logo" onClick={openModal} className="" href="#">
                <Image
                  src="/images/user_logo2A.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </a>
              {isModalOpen && <ModalLogin closeModal={closeModal} />}
            </div>
          ) : (
            <>
              <button
                className={`menuButtonCollapse navbar-toggler `}
                type="button"
                onClick={toggleNavbar}
              >
                <span className={`navbar-toggler-icon ${styles.menuIcon}`}></span>
              </button>
            </>
          )}
        </div>
      </nav>

      <div className={`mobileMenu ${styles.mobileMenu} collapse navbar-collapse ${styles.navIcons} ${collapsed ? '' : 'show'}`}>
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
            {isModalOpen && <ModalLogin closeModal={closeModal} />}
          </li>
        </ul>
      </div>
      {/* Conteúdo da sua página aqui */}
    </div>
  );
};

export default Header;
