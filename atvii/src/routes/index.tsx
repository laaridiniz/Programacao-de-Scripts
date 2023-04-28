import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loto from "../pages/Loto";
import Mega from "../pages/Mega";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Mega/>}/> 
                <Route path="/lotofacil" element={<Loto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;