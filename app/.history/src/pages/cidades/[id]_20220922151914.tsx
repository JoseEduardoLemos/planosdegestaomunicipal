import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import NavBar from '../../components/NavBar';

export default function Cidade({cidade,listaGrupoLink}){
  return(
    <div>
      <header>
      <NavBar></NavBar>  
      </header>
      <div id="titulosite">
        <h1 className="titulocidade">{`Planos de Gestão para ${cidade.nome}`}</h1>
        <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>  
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

    const cidade = await prisma.cidade.findFirst({
      where :{
        idkey : Number(idCidade.id)
      }
    });

    const listaGrupos = await prisma.grupo.findMany({
      where: {
        idkey_cidade : cidade.idkey,
      }
    });

    let listaGrupoLink = []

    for (let i = 0; i < listaGrupos.length; i++) {
      const grupo = listaGrupos[i];
      const listaLink = await prisma.link.findMany({
        where:{
          idkey_grupo : grupo.idkey
        }
       });
       listaGrupoLink.push({
        grupo : grupo,
        listaLink : listaLink,
       })
  
    }

    return{
      props: {
        cidade,
        listaGrupoLink,
      }
    }
  }
