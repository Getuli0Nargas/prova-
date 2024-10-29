import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 

function App() {
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState("")
  const [proprietario, setProprietario] = useState("")
  const [cor, setCor] = useState("")

  useEffect(() => {
    console.log(marca, modelo, ano, proprietario, cor)
  }, [marca, modelo, ano, proprietario,cor])

  return (
    <>
    <div className='Card'>
     <form>
      <label htmlFor="marca">Marca</label>
      <br />

      <label htmlFor="modelo">Modelo</label>
      <input type="text" id='modelo'/>
      <br />
      <label htmlFor="ano">Ano</label>
      <input type="text" id='ano'/>
      <br />
      <label htmlFor="proprietario">Proprietario</label>
      <input type="text" id='proprietario'/>
      <br />
      <label htmlFor="cor">Cor</label>
      <input type="text" id='cor'/>
      <br />


     </form>
    </div>
    </>
  )
}

export default App
