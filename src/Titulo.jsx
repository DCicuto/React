function Titulo({nome = "Sem nome", paragrafo = false, cor = "black"}) {
    const soma = 7 + 7;
    const urlImg = "https://cdn.iconscout.com/icon/premium/png-256-thumb/react-6602130-5507100.png";
  
    return(
    <div>
        <h1 style={{color: cor}}>Meu primeiro componente com exemplo de interpolação {nome}</h1>
        <h1 style={{color: cor}}>Uma soma de 7+7 para exemplicar mais uma interpolação: {soma}</h1>
        <img src={urlImg}/>
        {paragrafo ? 
        <p>Paragrafo para exemplificar mais um item dentro do componente, como também a tag img colocada direto no js</p>
        :
        <p>Não tem paragrafo</p>
        }
    </div>
  ) 
}
export default Titulo;