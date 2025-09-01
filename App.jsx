
import { useState } from 'react';// {} tem varios imports 
import './App.css'

function App() {
  // onChange captura mudança do elemento 
  // função eletras minusculas componetes Maiusculas
  // tudo que não é um estado não muda a intefaçe grafica
var nome = "hoj";
const [name, setName] = useState('valor inicial'); // esse é um Hooks
const [sobre, setSobre] = useState()

function mudarNome(event, evento){
  nome = event.target.value;
  setName(event.target.value)
  setSobre(evento.target.value)
  
}
/*function sobreNome(evento){
  setSobre(evento.target.value)

}
*/

  return (
    <>
    <p>imforme seu nome </p>
    
    <input onChange={mudarNome}/>
    <p>{nome}</p>
    <p>Agora via useState: {name}</p>

    <p>imforme o sobrenome </p>
    <input onChange={mudarNome}/>
    <p>Esse é seu sobrenome: {sobre} </p>
    
    
    </>
   
  )
}

export default App
