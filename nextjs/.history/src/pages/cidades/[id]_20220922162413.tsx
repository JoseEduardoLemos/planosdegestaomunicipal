import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import CardMunicipio from '../../components/CardMunicipio';
import NavBar from '../../components/NavBar';

export default function Cidade({planos}){
  return(
    <div>
      <header>
        <NavBar/>
      </header>
      
        <div className='cardsindex'>
          {
            planos.map(planos =>{
              return(
                <CardMunicipio title={planos.descricao} link ={`/cidades/${planos.idkey}`} imgsrc={planos.url_imagem_plano}/>
              )
            })
          }
        </div>
    </div>
  )
}

  export const getServerSideProps: GetServerSideProps = async (Router) =>{
    const idCidade = Router.query;  
    
    const prisma = new PrismaClient();

    const cidade = await prisma.cidade.findFirst({
      where: {
        idkey : Number(idCidade.id)
      }
    })

    const planos = await prisma.plano.findUnique();
  
    return{
      props:{
        cidade,
        planos,
      }
    }
  }
    // let listaPlanosGrupos = []

    // for(let x = 0; x< listaPlanosGrupos.length; x++){
    //   const plano = listaPlanos[x];
    //   const listaGrupo = await prisma.grupo.findMany({
    //     where: {
    //       idkey_plano : plano.idkey,
    //     }
    //   })
    // }

    // let listaGrupoLink = []

    // for (let i = 0; i < listaGrupoLink.length; i++) {
    //   const grupo = listaGrupoLink[i];
    //   const listaLink = await prisma.link.findMany({
    //     where:{
    //       idkey_grupo : grupo.idkey
    //     }
    //    });
    //    listaGrupoLink.push({
    //     grupo : grupo,
    //     listaLink : listaLink,
    //    })
  
    // }

