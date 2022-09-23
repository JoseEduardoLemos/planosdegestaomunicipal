import { PrismaClient } from "@prisma/client";
import Card from "../components/Card";
import NavBar from "../components/NavBar";


export default function App({cidade}){
  return(
    <div>
      <header>
        <NavBar/>
      </header>
      
        <div className='cardsindex'>
          {
            cidade.map(cidade =>{
              return(
                <Card title={cidade.nome} link ={`/cidades/${cidade.idkey}`} imgsrc={cidade.urlbrasao}/>
              )
            })
          }
        </div>
    </div>
  )
}


  export async function getServerSideProps(){  
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findMany();
    return{
      props:{
        cidade,
      },
    }
  }