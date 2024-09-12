//componente que renderiza um h1 com o texto Hello, World! e exporta o componente
import Titulo from "./Titulo"

function App( ){
  return (
  <div>
    <Titulo cor="orange" nome="Zaira" paragrafo={true}/>
    <Titulo cor="orangered" nome= "sem nome" paragrafo={false}/>
    <p></p>

  </div>
  )
}
export default App