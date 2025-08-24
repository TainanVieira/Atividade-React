import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartaoPessoa from './CartaoPessoa'
import Produto from './Produto'

function App() {
  

  return (
    <div style={{padding: '20px'}}>
      <h1>Cartao Pessoa</h1>
     

      <CartaoPessoa nome = "Renato" idade={25}
       proficao="Programador"/>
      <CartaoPessoa nome = "Amanda" idade = {19}
       proficao={"Desenpregada"}/>

        <Produto nome = "Feizão" preco={15.00}/>
      <Produto nome = "Arroz" preco={10.00}/>
      </div>
  )
}

export default App
