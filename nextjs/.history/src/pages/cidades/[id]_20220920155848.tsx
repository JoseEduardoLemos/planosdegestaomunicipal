import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';


export default function Cidade({cidade,grupo,links}){
  const router = useRouter();
  const idrota = router.query;

  return(
    <div>
      <NavBar></NavBar>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">{`Planos de Gestão para ${JSON.stringify(idrota.id)} ${cidade.nome}`}</h1>
        <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>  
      </div>
      <div className="grupoMunicipio">
          <div>
            {
              grupo.map(grupo =>{
                return(
                  <div>
                    <div className="tituloCard">
                      <h4>{grupo.descricao}</h4>
                    </div>
                      {links.map(links =>{
                        return(
                          <div className="grupo">
                            <h5>{links.descricao}</h5>
                            <div>
                              <Link target={"_blank"} href={links.link}>
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
  export const getServerSideProps: GetServerSideProps = async () =>{
    const router = useRouter();
    const idCidade = router.query;

    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findFirst({
      where:{
        idkey : JSON.parse(idCidade.id),
      }
    })
    const grupo = await prisma.grupo.findMany({
      where:{
        idkey_municipio : cidade.idkey
      }
    })
    const links = await prisma.link.findMany({
      where:{
        idkey_grupos : 1,
      }
    })
    return{ 
      props:{
        cidade,
        grupo,
        links,
      }
    }
  }
