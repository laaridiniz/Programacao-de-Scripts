import { NomeProps } from "../types";
import api from "./api";

class Nome {
    async get(nome: string): Promise<NomeProps[]> {
        const { data } = await api.get(`${nome}`);
        return data;
    }
}

const nome = new Nome();
export default nome;