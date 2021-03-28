import React from "react";
import style from "./loginPage.module.css";
import '../../csspadrao/util.css';
import Img from "../../img/login.jpg";

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


function Login2(){
    return(
        <div className={style.limiter}>
            <div className={style.containerlogin100}>
                <div className={style.login100Mais}></div>

                <div className={style.wrapLogin100} pR50 pL50 pT72 pB50>
                    <form className={style.login100Form} validateForm>
                        <span className={style.login100FormTitle} pB59>
                            Login:
                        </span>

                        <div className={style.wrapInput100} validateInput data-validate="Name is required">
                            <span className={style.labelInput100}></span>
                            <input className={style.input100} type="text" name="name" placeholder="NOME..."/>
                            <span className={style.focusInput100}></span>
                        </div>

                        <div className={style.wrapInput100} validateInput data-validate="Valid email is required: ex@abc.xyz">
                            <span className={style.labelInput100}></span>
                            <input className={style.input100} type="text" name="email" placeholder="Email ..."/>
                            <span className={style.focusInput100}></span>
                        </div>

                        {/* <div className={style.wrapInput100} validateInput data-validate="Username is required">
                            <span className={style.labelInput100}></span>
                            <input className={style.input100} type="text" name="username" placeholder="Username..."/>
                            <span className={style.focusInput100}></span>
                        </div> */}

                        <div className={style.wrapInput100 } validateInput data-validate = "Password is required">
                            <span className={style.labelInput100}></span>
                            <input className={style.input100} type="text" name="pass" placeholder="Password"/>
                            <span className={style.focusInput100}></span>
                        </div>

                        {/* <div className={style.wrapInput100 } validateInput data-validate = "Repeat Password is required">
                            <span className={style.labelInput100}>Repeat Password</span>
                            <input className={style.input100} type="text" name="repeat-pass" placeholder="*************"/>
                            <span className={style.focusInput100}></span>
                        </div> */}

                        {/* <div className={style.flexM} pB33 wFull>
                            <div className={style.contact100FormCheckbox}>
                                <input className={style.inputCheckbox100} id="ckb1" type="checkbox" name="remember-me"/>
                                <label className={style.labelCheckbox100} for="ckb1">
                                    <span className={style.txt1}>
                                        I agree to the
                                        <a href="#" className={style.txt2} hov1>
                                            Terms de Uso
                                        </a>
                                    </span>
                                </label>
                            </div>

                            
                        </div> */}

                        <div className={style.containerLogin100FormBtn}>
                            <div className={style.wrapLogin100FormBtn}>
                                <div className={style.login100FormBgbtn}></div>
                                <button className={style.login100FormBtn}>
                                   Logar
                                </button>
                            </div>

                            <a href="#" className={style.disBlock} pR30 pT10 pB10 pL30 hov1 txt3>
                               Cadastre-se...
                                <i className={style.fa /*fa-long-arrow-right*/} mL5></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export {TelaLogin, Login2}