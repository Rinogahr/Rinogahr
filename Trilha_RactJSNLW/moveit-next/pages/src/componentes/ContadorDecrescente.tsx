import { useEffect, useState } from "react";
import style from "../style/componentes/ContadorDecrescente.module.css";

export function ContadorDecrescente(){

    const [Tempo, setTempo] = useState(25 * 60);
    const [Ativar, setAtivar] = useState(false);

    const minuto =  Math.floor(Tempo / 60) ;
    const segundo =  Tempo % 60;

    const [ minuto1, minuto2 ] = String(minuto).padStart(2, '0').split('');
    const [ segundo1, segundo2 ] = String(segundo).padStart(2, '0').split('');

    function contadorDc(){
        setAtivar(true);
    }

    useEffect( () => {
        if(Ativar && Tempo > 0){
            setTimeout( () => {
                setTempo(Tempo - 1);
            }, 1000)
        }
    }, [Ativar , Tempo])

    return(
        <div className={style.ContadorDecrescentePai}>
            
            <div className={style.ContadorDecrescenteFilho1}>
                <div>
                    <span>{minuto1}</span>
                    <span>{minuto2}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundo1}</span>
                    <span>{segundo2}</span>
                </div>
            </div>

            <div>
                <button type="button" 
                onClick={contadorDc}
                className={style.IniciarCiclo}>
                    Iniciar um Ciclo
                </button>
            </div>
        </div>
    );
}