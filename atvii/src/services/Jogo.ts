import api from "./api" ;

export async function GetLoteria ():Promise<any>{
    var {data} = await api.get("")
    return {quina: data.quina, lotofacil: data.lotofacil, megasena: data.megasena};
} 
