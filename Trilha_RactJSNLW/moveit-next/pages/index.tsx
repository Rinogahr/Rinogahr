import { ContadorDecrescente } from "./src/componentes/ContadorDecrescente";
import { DesafiosConcluidos } from "./src/componentes/DesafiosConcluidos";
import { ExperienceBar } from "./src/componentes/ExperienceBar";
import { Perfil } from "./src/componentes/Perfil";
import style from "./src/style/pages/Home.module.css";

import Head from 'next/head';
export default function Home() {
  return (
    <div className={style.Container}>
      <Head>
        <title>Projeto Move.it</title>
      </Head>
      <ExperienceBar/> 

      <section>
        <div>
          <Perfil />
          <DesafiosConcluidos />
          <ContadorDecrescente />
        </div>

        <div>
         
        </div>
      </section>
    </div>
  )
}
