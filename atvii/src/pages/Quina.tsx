import Loading from "../components/Loading";
import QuinaComponent from "../components/Quina";
import useLoteria from "../hooks/Loteria";
import "../styles/Quina.css";

function Quina() {
    const { quina } = useLoteria();
    return (
        <>
            { quina.dataApuracao ? <QuinaComponent /> : <Loading /> }
        </>
    )
}

export default Quina;