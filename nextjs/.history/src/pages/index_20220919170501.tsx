import { PrismaClient } from "@prisma/client";
import CardMunicipio from "../components/CardMunicipio";
import NavBar from "../components/NavBar";


export default function App({cidade}){
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
          <CardMunicipio title={cidade.nome} link ="/cidades/12" imgsrc={cidade.urlbrasao}/>
          <CardMunicipio title={cidade.nome} link ="/cidades/32"  imgsrc={cidade.urlbrasao}/>
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