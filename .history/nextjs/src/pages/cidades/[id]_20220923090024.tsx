import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';

export default function Cidade({cidade,planos}){
  return(
    <div>
      <header>
        <NavBar/>
      </header>
      <br></br>
      <div id="titulosite">
        <div>
          <h1 className="titulocidade">{`Planos de Gestão Municicpal para a cidade de ${cidade.nome}`}</h1>
          <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>
        </div>
      </div>
        <div className='cardsindex'>
          {
            planos.map(planos =>{
              return(
                <Card title={planos.descricao} link ={`/cidades/planos/${planos.idkey}`} imgsrc={planos.url_imagem_plano}/>
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
      where:{
        idkey : Number(idCidade.id),
      }
    });
    
    const planos = await prisma.plano.findMany({
      where:{
        idkey_cidade : cidade.idkey,
      }
    });

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

