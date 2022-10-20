import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';

export default function Plano({plano,listaGrupoLink,cidade}){
  return(
    <div>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">{`${plano.descricao} para a cidade de ${cidade.nome}`}</h1>
      </div>
          <div>
            {            
             listaGrupoLink.map(grupoLink =>{
                let cont =0;
                let cont2 = cont;
                return(  
                <div key={cont} className="grupoMunicipio">
                  <div>
                    <div className="tituloCard">
                      <h3 key={grupoLink.idkey}>{grupoLink.grupo.descricao}</h3>
                    </div>
                        {
                        grupoLink.listaLink.map(link =>{
                          let cont2 = cont + 1;
                          return(
                            <div key={cont+1} className="grupo">
                              <h4>{link.descricao}</h4>
                              <Link color="#59585a" className="botaoAcessar" target={"_blank"} href={link.link}>
                                    <h5>Acessar &#128065;</h5> 
                              </Link>       
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
      },
    });

    const cidade = await prisma.cidade.findFirst({
      where:{
        idkey : plano.idkey_cidade
      }
    })

    const listaGrupos = await prisma.grupo.findMany({
      where: {
        idkey_plano : plano.idkey,
        AND : {
          links :{
            some :{
              idkey : {
                not : undefined,
              }
            }
          }
        }
      },
    });

    let listaGrupoLink = []

    for (let i = 0; i < listaGrupos.length; i++) {
      const grupo = listaGrupos[i];
      const listaLink = await prisma.link.findMany({
        where:{
          idkey_grupo : grupo.idkey
        },
        orderBy : { idkey : 'asc'}
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