import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../Components/CardList';
import Header from '../../Components/Header';

// import { Container } from './styles';

const Display: React.FC = () => {
  return (<div className="app_wrapper">

    <Header title="Listando contatos" />
    <CardList />
  </div>);
}

export default Display;