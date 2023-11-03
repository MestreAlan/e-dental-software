import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar ${expanded ? 'expanded' : 'collapsed'}`}>


      <ul className="side-nav">
        <li className="side-nav-title side-nav-item">Painel principal</li>

        <li className="side-nav-item menuitem-active">
          <a style={{ textDecoration: 'none' }} data-bs-toggle="collapse" href="#rhSideBar" aria-expanded="false" aria-controls="rhSideBar">
            <i className="fa fa-users"></i>
            <span className="badge bg-success float-end">4</span>
            <span> RH </span>
          </a>
          <div className="collapse" id="rhSideBar">
            <ul className="side-nav-second-level">
              <li>
                <a style={{ textDecoration: 'none' }} href="#" id="acessoListaColaboradores" className="menuitem-active active">- Todos colaboradores</a>
              </li>
              <li><a style={{ textDecoration: 'none' }} href="#" id="acessoListaColaboradoresAtivos">- Colaboradores ativos</a></li>
              <li><a style={{ textDecoration: 'none' }} href="#" id="acessoListaColaboradoresDesativos">- Colaboradores inativos</a></li>
              <li><a style={{ textDecoration: 'none' }} href="#" id="acessoCriarColaborador">- Novo colaborador</a></li>
            </ul>
          </div>
        </li>
      </ul>

      <div className="clearfix"></div>
      <ul className="nav">
        <li>
          <a href="#">
            <FaBell /> {expanded && 'Notificações'}
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope /> {expanded && 'Mensagens'}
          </a>
        </li>
        {/* Adicione mais itens conforme necessário */}
      </ul>
      <button onClick={toggleSidebar} className="toggle-button">
        {expanded ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default Sidebar;
