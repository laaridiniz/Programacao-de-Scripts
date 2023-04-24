import Loading from "../components/Loading";
import Lotofacil from "../components/Lotofacil";
import useLoteria from "../hooks/Loteria";

function Loto() {
    const { lotofacil } = useLoteria();
    return (
        <>
            { lotofacil.dataApuracao ? <Lotofacil /> : <Loading /> }
        </>
    )
}

export default Loto;