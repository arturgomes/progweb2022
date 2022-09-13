import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';

import './styles.css';

const CardList: React.FC = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);

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

  return (<div className="card_list_container">
    {users.map(usuario => <Card user={usuario} />)}
  </div>);
}

export default CardList;