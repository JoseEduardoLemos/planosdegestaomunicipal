import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function App({cidade}){
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
          <h1>Escolha um Município</h1>
        </div>
        <div className='cardsindex'>
          {
            cidade.map(cidade =>{
              return(
                <Card link ={`/cidades/${cidade.idkey}`} imgsrc={cidade.urlbrasao}/>
              )
            })
          }
        </div>
    </div>
  )
}


  export async function getServerSideProps(){  
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
    return{
      props:{
        cidade,
      },
    }
  }