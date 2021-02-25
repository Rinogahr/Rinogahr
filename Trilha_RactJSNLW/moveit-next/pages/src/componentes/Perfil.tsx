import style from "../style/componentes/Perfil.module.css";

export function Perfil(){
    return(
        <div className={style.PerfilConteiner}>
            <img src="https://avatars.githubusercontent.com/u/69148290?s=460&u=035c7909513852a51e82cf48f98e2b35b2a0d49f&v=4" alt="Rodrigo Maciel" />
            <div>
                <strong>Rodrigo Maciel</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 5
                </p>
            </div>
        </div>
    );
}