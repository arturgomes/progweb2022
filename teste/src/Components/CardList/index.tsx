import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';
import IconBusca from '../../assets/icon-busca.png'
import './styles.css';

const CardList: React.FC = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('')
  useEffect(() => {
    let consultaAPI = async () => {
      await api.get('/users')
        .then(response => {
          setUsers(response.data)
          setLoading(false)
        })
    }

    if (loading) {
      consultaAPI();
    }
  }, [])
  function handleSearchText(event: any) {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  function displayContact() {
    if (filter) {
      let res = users
        .filter((user: any) =>
          user.name.toLowerCase()
            .includes(filter.toLowerCase()) ||
          user.email.toLowerCase()
            .includes(filter.toLowerCase()) ||
          user.phone.toLowerCase()
            .includes(filter.toLowerCase()) ||
          user.address.city.toLowerCase()
            .includes(filter.toLowerCase())
          // ).map(usuario => <Card user={usuario} />)
        ).map(usuario => <div className="result">{usuario.name}</div>)
      return (<>

        <div className="result_container">{res}</div>
      </>)
    }
    else {
      return users.map(usuario => <Card user={usuario} />)
    }
  }

  if (loading) {
    return <div>Carregando..</div>
  } else {
    return (<div className="card_list_container">
      <div className="search_bar">
        <input
          type="text"
          value={filter}
          onChange={handleSearchText}
          placeholder="Buscar usuário..." />
        <img src={IconBusca} alt="Busca" />
      </div>
      {displayContact()}
    </div>);
  }
}

export default CardList;