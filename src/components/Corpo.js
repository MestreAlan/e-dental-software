import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/Corpo.module.css';

const Corpo = () => {

  const [expandido, setExpandido] = useState(false);

  const toggleExpansao = () => {
    setExpandido(!expandido);

    const direita = document.querySelector(`.${styles.direita}`);
    const btnExpand = document.querySelector(`.${styles.btnExpand}`);
    const botao = document.querySelector(`.${styles.btnExpand}`);


    if (direita && btnExpand) {
      if (expandido) {
        direita.style.flex = '70%';
        btnExpand.style.borderRadius = '0px 20px 20px 0px';
        botao.classList.add('espelhado');
        btnExpand.style.transform = 'rotate(0deg)';
      } else {
        direita.style.flex = '50%';
        btnExpand.style.borderRadius = '20px 0px 0px 20px';
        botao.classList.remove('espelhado');
        btnExpand.style.transform = 'rotate(180deg)';
      }
    }
  };

  useEffect(() => {
    // Função para atualizar o min-height
    const atualizarMinHeight = () => {
      const screenHeight = window.innerHeight;
      const minHeight = screenHeight * 0.7;
      const elemento = document.querySelector(`.${styles.containerCorpo}`);

      if (elemento) {
        elemento.style.minHeight = `${minHeight}px`;
      }
    };

    // Chamando a função para a inicialização
    atualizarMinHeight();

    // Adicionando um event listener para redimensionamento da janela
    window.addEventListener('resize', atualizarMinHeight);

    // Removendo o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', atualizarMinHeight);
    };
  }, []);

  return (
    <div className={styles.containerCorpo}>
      <div className={styles.esquerda}>
        {/* Conteúdo da div esquerda */}
      </div>
      <div className={styles.botao}>
        <button className={styles.btnExpand} onClick={toggleExpansao}></button>
      </div>
      <div className={styles.direita}>
        {/* Conteúdo da div direita */}
      </div>
    </div>
  );
};

export default Corpo;
