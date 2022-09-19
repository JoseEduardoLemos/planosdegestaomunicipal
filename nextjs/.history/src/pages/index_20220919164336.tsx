import { PrismaClient } from "@prisma/client";
import CardMunicipio from "../components/CardMunicipio";
import NavBar from "../components/NavBar";


export default function App({cidade1, cidade2}){
  return(
    <div>

      {/* <h1>teste</h1>
      <p className="text-lg">
        {JSON.stringify(cidade, null, 2)}
      </p>
      <div>
      <Head>
        <title>Planos de Gestão Municipal</title>
      </Head>     */}
      <header>
        <NavBar/>
      </header>
        <div className='cardsindex'>
          <CardMunicipio title={cidade1.nome} link ="/cidades/astorga" imgsrc={cidade1.urlbrasao}/>
          <CardMunicipio title={cidade2.nome} link ="/cidades/"  imgsrc={cidade2.urlbrasao}/>
        </div>
    </div>
  )
}


  export async function getStaticProps(){
  
    const prisma = new PrismaClient();
    const cidade1 = await prisma.cidade.findUnique({
      where:{
        idkey: 1,
      }
    })
    const cidade2 = await prisma.cidade.findUnique({
      where:{
        idkey:2,
      }
    })
    return{
      props:{
        cidade1,
        cidade2,
      },
    }
  }