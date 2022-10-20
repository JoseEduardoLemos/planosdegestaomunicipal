import { PrismaClient } from "@prisma/client";
import CardMunicipio from "../components/CardMunicipio";
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
                <h1>{cidade.idkey}</h1>
              )
            })
          }
          <CardMunicipio title={cidade.nome} link ={`/cidades/${cidade.idkey}`} imgsrc={cidade.urlbrasao}/>
          <CardMunicipio title={cidade2.nome} link ={`/cidades/${cidade2.idkey}`}  imgsrc={cidade2.urlbrasao}/>
        </div>
    </div>
  )
}


  export async function getStaticProps(){
  
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findMany();
    return{
      props:{
        cidade,
      },
    }
  }