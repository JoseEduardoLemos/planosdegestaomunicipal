import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import NavBar from '../../../components/NavBar';

export default function Plano({plano, cidade, grupo}){
  console.log(plano)
  return(
    <div>
      
      <header>
      <NavBar></NavBar>  
      </header>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">{`${plano.descricao} para a cidade de ${cidade.nome}`}</h1>
      </div>
          <div>
            {            
             plano.grupos.map(function(grupos){
                return(
                <div className="grupoMunicipio">
                  <div>
                    <div className="tituloCard">
                      <h3>{plano.grupos.descricao}</h3>
                    </div>
                        {
                        plano.grupos.map(function(link){
                          if(plano.grupo.links.idkey_grupo == plano.grupos.idkey){
                            return(
                              <div className="grupo">
                              <h4>{plano.grupos.links.descricao}</h4>
                              <Link color="#59585a" className="botaoAcessar" target={"_blank"} href={plano.grupos.links.link}>
                                    <h5>Acessar &#128065;</h5> 
                              </Link>       
                            </div>
                            )
                          }
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
      },
      include : {
        grupos : {
          include : {
            links : {
              select :{
                descricao :true,
                idkey : true,
                idkey_grupo : true,
                link : true,
                nomeArquivo : true, 
                grupo : true,
                mime : true,
              }
            }
          }
        }
      }
    })

    const cidade = await prisma.cidade.findFirst({
      where : {
        idkey : plano.idkey_cidade,
      }
    })

    const grupo = plano.grupos;

    
    // const listaGrupos = await prisma.grupo.findMany({
    //   where: {
    //     idkey_plano : plano.idkey,
    //     AND : {
    //       links :{
    //         some :{
    //           idkey : {
    //             not : undefined,
    //           }
    //         }
    //       }
    //     }
    //   },
    // });

    // let listaGrupoLink = []

    // for (let i = 0; i < listaGrupos.length; i++) {
    //   const grupo = listaGrupos[i];
    //   const listaLink = await prisma.link.findMany({
    //     where:{
    //       idkey_grupo : grupo.idkey
    //     },
    //     orderBy : { idkey : 'asc'}
    //    });
    //    listaGrupoLink.push({
    //     grupo : grupo,
    //     listaLink : listaLink,
    //    })
    // }
    return{
      props: {
        plano,
        cidade,
        grupo,
        // listaGrupoLink,
      }
    }
  }
