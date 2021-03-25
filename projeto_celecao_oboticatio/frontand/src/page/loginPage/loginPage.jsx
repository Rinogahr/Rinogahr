import React from "react";
import style from "./loginPage.module.css";

function TelaLogin(){
    return(
        <div className={style.divpai}>
                <div className={style.filho1}></div>
                    <div className={style.filho2}>
                        <form>
                            <span>Login</span>
                            <div className={style.validate_input} data-validate="Name is required">
                                <span className={style.label_input100}>Nome completo</span>
                                <input className={style.input100} type="text" name="name" placeholder="Nome..."/>
                                <span className={style.focus_input100}></span>
                            </div>
                            <div className={style.validate_input} data-validate="Name is required">
                                <span className={style.label_input100}>Senha</span>
                                <input className={style.input100} type="text" name="name" placeholder="Senha..."/>
                                <span className={style.focus_input100}></span>
                            </div>
                            <div className={style.formulario}>botão de logar</div>
                            <div className={style.formulario}>botão de cadastro</div>
                        </form>     
                    </div>
        </div>
    );
}

export {TelaLogin}