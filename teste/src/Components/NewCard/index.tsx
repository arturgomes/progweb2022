import { FormEvent } from 'react'
import api from '../../services/api'
import { Input } from '../Form/Input'
import './styles.css'
/**
 * 
 * {
 * name: String;
    username: String;
    email: String;
    address: {
        street: String;
        suite: String;
        city: String;
        zipcode: String;
    };
    phone: String;
  }
     */
export default function NewCard() {

  function handleNewCard(event: FormEvent) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    const usuario = {
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
      },
      phone: data.phone,
    }

    if (!data.name) {
      return;
    }

    try {
      api.post('http://localhost:3333/new', usuario)
      alert('Usuario criado com sucesso')

    }
    catch (err) {
      console.log(err)
      alert('Algum erro ocorreu ao criar o contato')
    }

  }
  return (
    <>
      <h3>Testando formulario</h3>
      <form onSubmit={handleNewCard} className="form_container">
        <div className="input_form">
          <label htmlFor="name">Seu nome</label>
          <Input id="name" name="name" type="text" placeholder="Ex: fulano de tal.." />
        </div>
        <div className="input_form">
          <label htmlFor="username">username</label>
          <Input id="name" name="username" type="text" placeholder="Ex: fulano2000" />
        </div>
        <div className="input_form">
          <label htmlFor="email">Email</label>
          <Input id="name" name="email" type="text" placeholder="Ex: fulano@detal.com" />
        </div>
        <div className="input_form">
          <label htmlFor="street">Logradouro</label>
          <Input id="name" name="street" type="text" placeholder="Ex: Rua dos bobos, numero 0." />
        </div>
        <div className="input_form">
          <label htmlFor="suite">Complemento</label>
          <Input id="name" name="suite" type="text" placeholder="Ex: Ap 1202" />
        </div>
        <div className="input_form">
          <label htmlFor="city">Cidade</label>
          <Input id="name" name="city" type="text" placeholder="Ex: São Paulo" />
        </div>
        <div className="input_form">
          <label htmlFor="zipcode">CEP</label>
          <Input id="name" name="zipcode" type="text" placeholder="Ex: 00000-000" />
        </div>
        <div className="input_form">
          <label htmlFor="phone">Telefone</label>
          <Input id="name" name="phone" type="text" placeholder="Ex: 1234" />
        </div>
        <footer>
          <button type='submit'>Cadastrar</button>
        </footer>
      </form>
    </>
  )
}
