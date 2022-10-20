import { PrismaClient } from "@prisma/client";
import Card from "../components/Card";

export default function App({cidade}){
  return(
    <div>
        <br></br>
        <div id="h1">
          <h1>Escolha um Município</h1>
        </div>
        <div className='cardsindex'>
          {
            cidade.map(cidade =>{
              return(
                <Card key={cidade.idkey} link ={`/cidades/${cidade.idkey}`} imgsrc={cidade.urlbrasao} nomeCidade={cidade.nome}  />
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