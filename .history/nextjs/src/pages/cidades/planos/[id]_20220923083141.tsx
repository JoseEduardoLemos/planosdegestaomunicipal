import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import NavBar from '../../../components/NavBar';

export default function Plano({plano,listaGrupoLink,cidade}){
  return(
    <div>
      <header>
      <NavBar></NavBar>  
      </header>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">{`${plano.descricao} para a cidade de ${cidade.nome}`}</h1>
        <img className="imagemtitulocidade"src={plano.url_imagem_plano}></img>  
      </div>
          <div>
            {            
             listaGrupoLink.map(grupoLink =>{
                return(
                <div className="grupoMunicipio">
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
                </div>
              )}
             )
            }
        </div>
      </div>
  )
}

  export const getServerSideProps: GetServerSideProps = async (Router) =>{
    const idPlano = Router.query;  
    
    const prisma = new PrismaClient();

    const plano = await prisma.plano.findFirst({
      where :{
        idkey : Number(idPlano.id)
      }
    });

    const cidade = await prisma.cidade.findFirst({
      where:{
        idkey : plano.idkey_cidade
      }
    })

    const listaGrupos = await prisma.grupo.findMany({
      where: {
        idkey_plano : plano.idkey,
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
        plano,
        listaGrupoLink,
        cidade,
      }
    }
  }
