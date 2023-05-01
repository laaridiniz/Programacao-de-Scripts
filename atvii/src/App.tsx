import { Navbar } from "react-bootstrap";
import { Provider } from "./contexts"
import Rotas from "./routes";

function App() {

  return (
    <Provider>
      <Navbar/>
      <Rotas />
    </Provider>
  );
}

export default App;