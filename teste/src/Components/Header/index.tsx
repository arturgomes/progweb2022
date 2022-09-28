import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

// import { Container } from './styles';
interface HeaderProps {
  title: string
}
const Header = (props: HeaderProps) => {
  return (
    <>
      <header className="header_container">
        <ul className="ul_wrapper">
          <li><Link to="/">Listar</Link></li>
          <li><Link to="/buscar">Buscar</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/novo">Novo</Link></li>
        </ul>
      </header>
      <h1>{props.title}</h1>
    </>);
}

export default Header;