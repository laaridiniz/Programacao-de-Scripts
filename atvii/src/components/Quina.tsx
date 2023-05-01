import useLoteria from "../hooks/Loteria";
import trevo from "../assets/trevo-quina.png";
import "../styles/Quina.css";

function Quina() {

    const { quina, loaded } = useLoteria();

    return (
        <div className="container" style={{ display: loaded ? "" : "none" }}>
            <div className="col-1">
                <div className="header-container">
                    <div className="image-header">
                        <img src={trevo} alt="" />
                    </div>
                    <div className="quina-logo-header">
                        <h3>QUINA</h3>
                    </div>
                </div>
                <div className="description">
                    Estimativa de prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}.
                </div>
                <div className="quina-value">
                    <h2>{loaded ? quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}</h2>
                </div>
            </div>

            <div className="quina-col-2">
                <div className="">
                    <ul>
                        {quina.dezenas ? quina.dezenas.map((el) =>
                            <li>
                                {el}
                            </li>
                        ) : ""}
                    </ul>
                </div>
                <h1 className="winners">
                    {quina.acumulado ? "ACUMULADO" : quina.quantidadeGanhadores + " ganhadores"}
                </h1>
                <p className="gameDescription">
                    Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
                </p>
            </div>
        </div>
    )
}

export default Quina;