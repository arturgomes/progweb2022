import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';

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
      return users
        .filter((user: any) =>
          user.name.toLowerCase()
            .includes(filter.toLowerCase()) ||
          user.address.city.toLowerCase()
            .includes(filter.toLowerCase())
        ).map(usuario => <Card user={usuario} />)
    }
    else {
      return users.map(usuario => <Card user={usuario} />)
    }
  }

  if (loading) {
    return <div>Carregando..</div>
  } else {
    return (<div className="card_list_container">
      <input type="text" value={filter} onChange={handleSearchText} />
      {displayContact()}
    </div>);
  }
}

export default CardList;