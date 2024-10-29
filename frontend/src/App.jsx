import { useEffect, useState } from 'react'
import axios  from 'axios'
import './App.css'

function App() {

  /*Funções UseState*/
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [ano, setAno] = useState(0)
  const [proprietario, setProprietario] = useState("")
  const [cor, setCor] = useState("") 


  /* Função anônima */
  useEffect(() => {
    console.log(marca, modelo, ano, cor, proprietario)
  }, [marca, modelo, ano, cor , proprietario])


  // npm i axios
  async function RegisterNewVehicle(){
    await axios.post("http://localhost:3000/inserir",{
      marca, modelo, ano, cor, proprietario

    })
  }

  async function UpdateVehicle(){
    await axios.put("http://localhost:3000/update")
    marca, modelo, ano, cor, proprietario
  }

  function handleSubmit(e){
    e.preventDefault();
    RegisterNewVehicle();
  } //no botão de registrar do form, usar essa função
  //onclick="() => {handleSubmit}" 


  return (
    <>
      <div className="card">
        <form>

          <label htmlFor="proprietario">Proprietario</label>
          <br />
          <input type="text" id='proprietario'  onChange={(e) => {setProprietario(e.target.value)}} />
          <br />
          <label htmlFor="marca">Marca</label>
          <br />
          <input type="text" id='marca' onChange={(e) => {setMarca(e.target.value)}}/>
          <br />
          <label htmlFor="modelo">Modelo</label>
          <br />
          <input type="text" id='modelo'   onChange={(e) => {setModelo(e.target.value)}}/>
          <br />
          <label htmlFor="cor">Cor</label>
          <br />
          <input type="text" id='cor'  onChange={(e) => {setCor(e.target.value)}}/>
          <br />
          <label htmlFor="ano">Ano</label>
          <br />
          <input type="number" id='ano'  onChange={(e) => {Number(setAno(e.target.value))}}/>
          <br />
          <br />
          <button type='submit' onClick={handleSubmit}>Registrar veículo</button>


        </form>
      </div>
    </>
  )
}

export default App