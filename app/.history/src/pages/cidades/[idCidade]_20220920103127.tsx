import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import Grupo from '../../components/Grupo';
import NavBar from '../../components/NavBar';


export default function Cidade({cidade}){
  const router = useRouter();
  const idCidade = router.query;
    return (
      <div>
        <NavBar></NavBar>
        <br></br>
        <div id="titulosite">
          <h1 className="titulocidade">{idCidade}</h1>
          <img className="imagemtitulocidade"src='https://leismunicipais.com.br/img/cidades/pr/astorga.png'></img>
          
        </div>
        <Grupo 
          grupotitle='RELATÓRIOS'
          link1='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/fuYmqlmr9HaAkGnm64IZq8ZBRXvykbUQFmSHUYCRf1veSN4Df28CFb_FAxNb8gSE/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/I%20AUDI%C3%8ANCIA%20P%C3%9ABLICA%20Astorga-%20PDMU.pptx.pdf'
          descricao='Audiência Pública de Astorga - PDMU'
          link2='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Wnqc6NGpLD2Nc8QcxhH1eFj8uiVyWH6HjHQATZ4b1eMdWu1kqtCvHKfg2-DpiLtq/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Informe%20I%20-%20Astorga.pdf'
          descricao2='INFORMATIVO DO PLANO DE MOBILIDADE URBANA DO MUNICÍPIO DE ASTORGA'        
          link3='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/S69Pn0Dbf2Hi2phight-EZ7Xddf_UYy5Yo8rKNrdfRDyiSH7roVt8kaFd8F3_KPH/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Pauta%20-%20Reuni%C3%A3o%20t%C3%A9cnica%20-%20Astorga.pdf' 
          descricao3='PAUTA DA PRIMEIRA REUNIÃO TÉCNICA DO PLANO DE
          MOBILIDADE URBANA DE ASTORGA'
        ></Grupo> 
      </div>
    )
  }


  export async function getServerSideRender(){
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findFirst({
      where:{
        idkey : 1,
      }
    })
    return{
      props:{
        cidade,
      }
    }
  }

  export async function getStaticPaths() {
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findMany();
    const paths = cidade.map((cidade) => ({
      params: {
        idkey: cidade.idkey.toString()
      },
    }));
    return {
      paths, fallback: false
    }
}

  // export const getStaticProps: GetStaticProps = async () =>{
  //   const prisma = new PrismaClient();
  //   const cidade = await prisma.cidade.findUnique({
  //     where:{
  //       idkey:1,
  //     }
  //   })
  //   return {
  //     props:{
  //       cidade,
  //     }
  //   }
  // }

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