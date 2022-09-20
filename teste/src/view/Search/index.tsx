import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Search: React.FC = () => {
  return (<div className="app_wrapper">
    <header>
      <ul>
        <li><Link to="/">Listar</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
    <h1>Buscando contatos</h1>
  </div>);

}

export default Search;