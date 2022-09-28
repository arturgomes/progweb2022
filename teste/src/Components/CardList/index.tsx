import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../Card';
import IconBusca from '../../assets/icon-busca.png'
import './styles.css';

const CardList: React.FC = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let consultaAPI = async () => {
      await api.get('/list')
        .then(response => {
          setUsers(response.data)
          setLoading(false)
          console.log("executou novamente o useEffect")
        })
    }

    if (loading) {
      consultaAPI();
    }
  }, [loading])

  function handleDelete(id: string) {
    const usuario = users.find((user: any) => user._id === id)

    if (usuario) {
      try {
        api.post('http://localhost:3333/delete', {
          email: usuario.email
        })
        alert("Contato removido com sucess")
        setLoading(true);

      }
      catch (err) {
        console.log(err)
        alert("erro ao remover o contato")
      }
    }
  }

  if (loading) {
    return <div>Carregando..</div>
  } else {
    return (<div className="card_list_container">

      {users.map(usuario => <Card key={usuario.id} user={usuario} del={handleDelete} />)}
    </div>);
  }
}

export default CardList;