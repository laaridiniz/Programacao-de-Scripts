import { useContext } from "react";
import { Contexto } from "../contexts";

function useLoteria() {
    const context = useContext(Contexto);
    return context;
}

export default useLoteria;