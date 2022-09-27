import React from 'react';
import CardSearch from '../../Components/CardSearch';
import Header from '../../Components/Header';
// import { Container } from './styles';

const Search: React.FC = () => {
  return (<div className="app_wrapper">
    <Header title="Buscando contatos" />
    <CardSearch />
  </div>);

}

export default Search;