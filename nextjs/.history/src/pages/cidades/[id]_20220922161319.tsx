import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import NavBar from '../../components/NavBar';

export default function Cidade({listaPlanos}){
  return(
    <div>
      <header>
      <NavBar></NavBar>  
      </header>
      <div id="titulosite">
        <h1 className="titulocidade">{`Planos de Gestão para ${listaPlanosGrupos.descricao}`}</h1>
        <img className="imagemtitulocidade"src={listaPlanosGrupos.url_imagem_plano}></img>  
      </div>

      <div className="grupoMunicipio">
          <div>
            {            
             listaGrupoLink.map(grupoLink =>{
                return(
                  <div>
                    <div className="tituloCard">
                      <h4>{grupoLink.grupo.descricao}</h4>
                    </div>
                        {
                        grupoLink.listaLink.map(link =>{
                          return(
                            <div className="grupo">
                              <h5>{link.descricao}</h5>
                              <div>
                                <Link target={"_blank"} href={link.link}>
                                  <a className='linkscolor'>
                                    <h5>Visualizar &#128065;</h5>
                                  </a>
                                </Link>
                              </div>          
                            </div>
                          )
                        })
                        }
                  </div>
              )}
             )
            }
          </div>
        </div>
      </div>
  )
}

  export const getServerSideProps: GetServerSideProps = async (Router) =>{
    const idCidade = Router.query;  
    
    const prisma = new PrismaClient();

    const listaPlanos = await prisma.plano.findMany();

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

    return{
      props:{
        listaPlanos,
      }
      }
    }
  }
