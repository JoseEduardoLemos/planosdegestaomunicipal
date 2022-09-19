import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';




export async function getStaticProps(){
  const prisma = new PrismaClient();
  const cidade = await prisma.cidade.findMany();
  return{

  }
}



export default function idCidade({cidade}){
    const router = useRouter();
    const {idCidade} = router.query;

    return (
      <div>
        <h1>{JSON.stringify(cidade,null,2)}</h1>
        <h3>Essa aqui é a cidade: {idCidade}</h3>
      </div>
    )
  }

  export async function getServerSideProps(){
    const prisma = new PrismaClient();
    const cidade = await prisma.cidade.findUnique({
      where:{
        idkey:1,
        },
      })
    return{
        props:{
            cidade,
        }
    }
  }