import { Provider } from "./contexts"
import Rotas from "./routes";

function App() {

  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

export default App;