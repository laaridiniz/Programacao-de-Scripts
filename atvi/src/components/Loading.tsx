import "../styles/Lotofacil.css";
import { Contexto } from "../contexts";
import { useContext, useEffect } from "react";
import "../styles/Loading.css"
import { GetLoteria } from "../services/Jogo";

function Loading() {
    const { loaded,setLotofacil, setMegasena, setLoaded} = useContext(Contexto)
    useEffect(()=>{
        setTimeout(()=>{
            GetLoteria().then((r)=>{
                console.log(r)
                setLotofacil(r.lotofacil)
                setMegasena(r.megasena)
                setLoaded(true)
            })
        }, 3000)
    },[])
    return (
        <>
            <div className="loading" style={{ display: loaded ? "none" : "" }}>
                <div className="spinner">
                </div>
            </div>
          <hr style={{ display: loaded ? "" : "none" }}></hr>
        </>
    )
}

export default Loading;
