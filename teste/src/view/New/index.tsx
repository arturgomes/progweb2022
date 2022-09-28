import React from 'react';
import { Link } from 'react-router-dom';
import NewCard from '../../Components/NewCard';
import Header from '../../Components/Header';

// import { Container } from './styles';

const New: React.FC = () => {
  return (<div className="app_wrapper">

    <Header title="Novo contato" />
    <NewCard />
  </div>);
}

export default New;