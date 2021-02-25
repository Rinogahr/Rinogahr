import style from "../style/componentes/ExperienceBar.module.css";
export function ExperienceBar() {
    return (
        <header className={style.barraXp}>
            <span>0 xp</span>
                <div>
                    <div style={{ width: '50%'}} />
                    <span className={style.containerXp} style={{ left: "50%"}}>
                        300px
                    </span>
                </div>
            <span>600 xp</span>
        </header>
    );
}