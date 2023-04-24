import Loading from "../components/Loading";
import Megasena from "../components/Megasena";
import useLoteria from "../hooks/Loteria";
import "../styles/Megasena.css";

function Mega() {
    const { megasena } = useLoteria();
    return (
        <>
            { megasena.dataApuracao ? <Megasena /> : <Loading /> }
        </>
    )
}

export default Mega;