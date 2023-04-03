import { useState } from "react";
import { CepProps } from "./types";
import Cep from "./services/Cep";

function App() {
  const [response, setResponse] = useState({} as CepProps);
  const [cep, setCep] = useState("");

  function obter(){
    Cep.get(cep)
    .then(r => setResponse(r));
  }

  return (
    <div>
      <div>
        <label>CEP</label>
        <input value={cep} onChange={(e)=>setCep(e.target.value)}/>
        <button onClick={()=>obter()}>Enviar</button>
      </div>
      <div>
        <p>Bairro: {response.bairro}</p>
        <p>Cidade: {response.localidade}</p>
      </div>
    </div>
  );
}

export default App;