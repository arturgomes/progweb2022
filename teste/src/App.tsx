import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import CardList from './Components/CardList'
// yarn add axios
const usuario = {
  name: "Artur",
  email: "artur.gomes@ufms.br",
  address: {
    street: "Rua Rio Branco, ...",
    suite: "CPAN",
    city: "Corumbá"

  },
  phone: "12345"
}
function App() {

  return (
    <>
      {/* <Card user={usuario} /> */}
      <CardList />
    </>
  )
}
// yarn add react-icons
export default App
