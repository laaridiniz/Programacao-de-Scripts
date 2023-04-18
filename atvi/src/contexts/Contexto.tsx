import { createContext, useState } from "react";
import { Loteria, Props } from "../types";


const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Loteria);
    const [lotofacil, setLotofacil] = useState({} as Loteria);
    const [loaded, setLoaded] = useState(false)

    return (
        <Contexto.Provider value={{ megasena, lotofacil, loaded, setMegasena, setLotofacil, setLoaded }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

