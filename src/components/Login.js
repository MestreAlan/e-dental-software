// components/ModalLogin.js
import React from 'react';
import styles from '../../styles/components/Login.module.css';

const ModalLogin = ({ closeModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={styles.modal} onClick={handleModalClick}>
      <div className={styles.modalContent}>
        <h2 className={styles.center}>Login</h2>
        <form className={styles.form}>
          <label htmlFor="username" className={`${styles.form}`}>Username:</label>

          <input type="text" id="username" name="username" className={`${styles.input}`} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className={`${styles.input}`} />

          <button type="submit" className={`${styles.button}`}>Entrar</button>
        </form>
        <p className={styles.p}><span>Esqueci minha senha</span></p>
        <p className={styles.p}><span>Criar nova conta</span></p>
      </div>
    </div >
  );
};

export default ModalLogin;

