import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import NavBar from '../../components/NavBar';

export default function Cidade({cidade,grupo,link}){
  return(
    <div>
      <NavBar></NavBar>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">{`Planos de Gestão para ${cidade.nome}`}</h1>
        <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>  
      </div>

      <div className="grupoMunicipio">
          <div>
            {            
             grupo.map(grupo =>{
                return(
                  <div>
                    <div className="tituloCard">
                      <h4>{grupo.idkey}</h4>
                    </div>
                        {link.map(link =>{
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
                )
              })
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
      where:{
        idkey : Number(idCidade.id)
      }
    })
    const grupo = await prisma.grupo.findMany({
      where:{
        idkey_cidade : cidade.idkey  
      }
    })
    
    const link = await prisma.link.findMany({
      where:{
        idkey_grupos : 4
      }
    });

    return{ 
      props:{
        cidade,
        grupo,
        link,
      }
    }
  }
