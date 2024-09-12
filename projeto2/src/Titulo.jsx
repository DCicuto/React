
import { useState } from "react";

function Titulo({ cor }) {
    
    const [texto, setTexto] = useState("Estado: A memória de um componente");
    const [inputText, setInputText] = useState("");
    const urlImg = "https://t4.ftcdn.net/jpg/05/31/62/07/360_F_531620717_nZib6MH7DOnoazcOtXOpM71BqZEgPIFU.jpg";

    function clicou(){
        setTexto(inputText);
    }
  
    return(
    <div>
        <h1 style={{color: cor}}>{texto}</h1>
        <input value={inputText} onChange={(e) =>{setInputText(e.target.value)}} type="text" />
        <button onClick={clicou}>Mudar</button>
        <img src={urlImg}/>
        
    </div>
  ) 
}
export default Titulo;