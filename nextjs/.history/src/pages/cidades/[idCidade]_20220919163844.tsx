import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';


export default function idCidade(){
    const router = useRouter();
    const {idCidade} = router.query;

    return (
      <div>
        <h1>cidade:{idCidade}</h1>
          
      </div>
    )
  }

  export const getStaticProps: GetStaticProps = async () =>{
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findUnique({
      where:{
        idkey:1,
      }
    })
    return {
      props:{
        cidade,
      }
    }
  }

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