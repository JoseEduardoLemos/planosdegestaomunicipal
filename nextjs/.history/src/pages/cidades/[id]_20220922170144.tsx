import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import CardMunicipio from '../../components/Card';
import NavBar from '../../components/NavBar';

export default function Cidade({cidade}){
  return(
    <div>
      <header>
        <NavBar/>
      </header>
      
        <div className='cardsindex'>
          {
            cidade.map(cidade =>{
              return(
                <CardMunicipio title={cidade.descricao} link ={`/cidades/planos/${cidade.idkey}`} imgsrc={cidade.url_imagem_plano}/>
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
    const cidade = await prisma.cidade.findMany({
      where:{
        idkey : Number(idCidade.id)
      }
    })

    const plano = await prisma.plano.findMany({
      where:{
        idkey_cidade : cidade[1].idkey,
      }
    })
    return{
      props:{
        cidade,
        plano,
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

