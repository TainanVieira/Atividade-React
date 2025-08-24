const estiloCartao = { // uma constante para estilizar o cartao
  border: '1px solid #858ef4ff',
  padding: '20px',// espaçamento interno do cartao
  borderRadius: '100px',
  maxWidth: '250px',// largura maxima do cartao
  marginBottom: '1rem',// margem inferior do cartao
};


function CartaoPessoa({nome, idade, proficao}){
    return(
        <div style={estiloCartao}>
            <h1>{nome}</h1>
            <p>Idade:{idade}</p>
            <p>Proficão:{proficao}</p>


        </div>

    )
}
export default CartaoPessoa
