import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function App({cidade,imagens}){
  return(
    <div>
      <Head>
        <title>Planos de Gestão Municipal</title>
        <link rel="icon" type="image/x-icon" href="../lib/favicon.ico" />
      </Head>
      <header>
        <NavBar/>
      </header>
        <br></br>
        <div id="h1">
          <img src={imagens}></img>
          <h1>Escolha um Município</h1>
        </div>
        
        <div className='cardsindex'>
          {
            cidade.map(cidade =>{
              return(
                <Card link ={`/cidades/${cidade.idkey}`} imgsrc={cidade.urlbrasao} nomeCidade={cidade.nome}/>
              )
            })
          }
        </div>
    </div>
  )
}


  export async function getServerSideProps(){  
    const prisma = new PrismaClient();
    const imagens = await fetch('process.env.DB');
    const cidade = await prisma.cidade.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
    return{
      props:{
        cidade,
        imagens,
      },
    }
  }