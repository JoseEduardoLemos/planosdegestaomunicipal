import { PrismaClient } from "@prisma/client";



function App({cidade}){
  return(
    <div>
      <h1>teste</h1>
      <p className="text-lg">
        {JSON.stringify(cidade, null, 2)}
      </p>
      {/* <div>
      <Head>
        <title>Planos de Gestão Municipal</title>
      </Head>    
      <header>
        <NavBar/>
      </header>
        <div className='cardsindex'>
          <CardMunicipio title="Astorga" link ="/cidades/astorga" imgsrc="https://leismunicipais.com.br/img/cidades/pr/astorga.png"/>
          <CardMunicipio title="Loanda" link ="/cidades/loanda"  imgsrc="https://upload.wikimedia.org/wikipedia/commons/e/ef/Bras%C3%A3o_de_Loanda.png"/>
          <CardMunicipio title="Paiçandu" link ="/cidades/paicandu"  imgsrc="https://www.mbi.com.br/mbi/files/media/image/simbolopedia/municipio-paicandu-brasao-simb-brsspr0300917503.jpg" />
          <CardMunicipio title="Terra Boa" link ="/cidades/terraboa"  imgsrc="https://leismunicipais.com.br/img/cidades/pr/terra-boa.png"/>
          <CardMunicipio title="Barbosa Ferraz" link ="/cidades/barbosaferraz"  imgsrc="https://www.mbi.com.br/mbi/files/media/image/simbolopedia/municipio-barbosa-ferraz-brasao-simb-brsspr0200502505.jpg"/>
          <CardMunicipio title="Nova Esperança" link ="/cidades/novaesperanca"  imgsrc="https://upload.wikimedia.org/wikipedia/commons/d/d4/Bras%C3%A3o_Nova_Esperan%C3%A7a%2C_PR%2C_Brazil.png"/> 
        </div>
    </div> */}
    </div>
  )

  export async function getStaticProps(){
  
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findMany({
      where:{
        nome:{
          equals:'Astorga'
        }
      } 
    }
  }
}

export default App