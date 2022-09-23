import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import CardMunicipio from '../../components/Card';
import NavBar from '../../components/NavBar';

export default function Cidade({grupo}){
  return(
    <div>
      <header>
        <NavBar/>
      </header>
      
        <div className='cardsindex'>
          {
            grupo.map(grupo =>{
              return(
                <CardMunicipio title={grupo.descricao} link ={`/cidades/planos/${grupo.idkey}`} imgsrc={grupo.url_imagem_plano}/>
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
    const grupo = await prisma.grupo.findMany({
      where:{
        idkey_plano : Number(idCidade.id),
      }
    })
    return{
      props:{
        grupo,
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

