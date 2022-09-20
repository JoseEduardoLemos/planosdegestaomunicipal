import { Link } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';


export default function Cidade({cidade},{grupo},{link}){
  const router = useRouter();
  return(
    <div>
      <NavBar></NavBar>
      <br></br>
      <div id="titulosite">
        <h1 className="titulocidade">Planos de Gestão para {cidade.nome} </h1>
        <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>  
      </div>
      <div className="grupoMunicipio">
        <div className="tituloCard"><h4>{grupo.descricao}</h4></div>
          <div>
            {
              grupo.map(grupo =>{
                return(
                <div>
                  <div className="grupo">
                    <div>
                      <h5>{link.descricao}</h5>
                    </div> 
                  <div>
                    <Link target={"_blank"} href={link.link}>
                      <a className='linkscolor'>
                        <h5>Visualizar &#128065;</h5>
                      </a>
                    </Link>
                  </div>          
                  </div> 
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
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findUnique({
      where:{
        idkey : 2,
      }
    })
    const grupo = await prisma.grupo.findMany({
      where:{
        idkey_municipio : cidade.idkey
      }
    })
    const link = await prisma.link.findMany({
      where:{
        idkey_grupos : 1,
      }
    })
    return{
      props:{
        cidade,
        grupo,
        link,
      }
    }
  }

    // const router = useRouter();
  //   return (
  //     <div>
  //       <NavBar></NavBar>
  //       <br></br>
  //       <div id="titulosite">
  //         <h1 className="titulocidade">Planos de Gestão para {cidade.nome} </h1>
  //         <img className="imagemtitulocidade"src={cidade.urlbrasao}></img>
          
  //       </div>
  //       <Grupo Grupo={grupo}/> 
  //     </div>
  //   )
  // }

  // export async function getStaticPaths() {
  //   const prisma = new PrismaClient();
  //   const cidade = await prisma.cidade.findMany();
  //   const paths = cidade.map((cidade) => ({
  //     params: {
  //       idkey: cidade.idkey.toString()
  //     },
  //   }));
  //   return {
  //     paths, fallback: false
  //   }



  // export const getStaticPaths: GetStaticPaths = async() =>{
  //   const prisma = new PrismaClient();
  //   const cidades = await prisma.cidade.findMany();
    
  //   const paths = cidades.map((cidade) =>({
  //     params: {
  //       idkey : cidade.idkey.toString(),
  //       nome : cidade.nome,
  //       urlbrasao : cidade.urlbrasao,
  //     },
  //   }))

  //   return{
  //      paths, fallback: false
  //   }
  // }