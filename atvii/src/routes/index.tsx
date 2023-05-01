import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loto from "../pages/Loto";
import Mega from "../pages/Mega";
import Quina from "../pages/Quina";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Mega/>}/> 
                <Route path="/lotofacil" element={<Loto/>}/>
                <Route path="/quina" element={<Quina/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;