import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './routes';

//COMPONENTE PRINCIPAL DO WEBSITE
function App() {
  return (
    //ROTEAMENTO
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
