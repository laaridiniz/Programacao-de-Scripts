export interface Loteria {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso:number,
    valorPremio: number

}

export interface Props {
    megasena: Loteria;
    lotofacil: Loteria;
    quina: Loteria;
    loaded:boolean
    setMegasena: Function;
    setLotofacil: Function;
    setQuina: Function;
    setLoaded : Function;
}