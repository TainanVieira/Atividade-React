

function Produto({nome, preco}){
    return(

        
        <p>{nome} - R$ {preco.toFixed(2)}</p>// Esse toFixed(2) serve para limitar o numero de casas decimais
    
  
    )
}
export default Produto;
