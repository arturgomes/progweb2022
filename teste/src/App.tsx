import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
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
      <Card user={usuario} />
    </>
  )
}
// yarn add react-icons
export default App
