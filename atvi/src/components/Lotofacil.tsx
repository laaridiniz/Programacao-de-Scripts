import trevo from "../assets/trevo-lotofacil.png"
import "../styles/Lotofacil.css";
import { Contexto } from "../contexts";
import { useContext } from "react";

function Lotofacil() {

    const { lotofacil, loaded } = useContext(Contexto)

    return (
        <>
            <div className="container" style={{ display: loaded ? "" : "none" }}>
                <div className="col-1">
                    <div className="header-container">
                        <div className="image-header">
                            <img src={trevo} />
                        </div>
                        <div className="logo-header">
                            <h3 >LOTOFÁCIL</h3>
                        </div>
                    </div>
                    <div className="description">
                        Estimativa de prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}.
                    </div>
                    <div className="value">
                        <h2>{loaded?lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):""}</h2>
                    </div>
                </div>

                <div className="col-2">
                    <div className="">
                        <ul>
                            {lotofacil.dezenas ? lotofacil.dezenas.map((el) =>
                                <li>
                                    {el}
                                </li>
                            ) : ""}
                        </ul>
                    </div>
                    <h1 className="winnersNumber">
                        {lotofacil.acumulado ? "ACUMULADO" : lotofacil.quantidadeGanhadores + " ganhadores"}
                    </h1>
                    <p className="gameDescription">
                        Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Lotofacil;