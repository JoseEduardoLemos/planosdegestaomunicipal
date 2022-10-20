import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Links from '../../components/links';
import NavBar from '../../components/NavBar';


export default function Cidade({cidade},{grupo}){
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
                  <Links link={undefined}></Links>
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
    return{
      props:{
        cidade,
        grupo,
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