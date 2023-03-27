import { createContext } from "react";
import { Props } from "../types";

const Contexto = createContext<Props>({} as Props);

export default Contexto;

