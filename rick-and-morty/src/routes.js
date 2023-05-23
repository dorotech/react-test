import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

//COMPONENTE RESPONSÁVEL PELA ROTA
function RoutesApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default RoutesApp;
