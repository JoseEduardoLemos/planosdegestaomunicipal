import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';




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

  export async function getStaticProps(){

    return{

    }
  }

  export async function getStaticPaths(){
    const prisma = new PrismaClient();
    const cidades = await prisma.cidade.findMany();
    
    const paths = cidades.map((cidades) =>({
      params: {idkey : cidades.idkey.toString()},
    }))

    return{
       paths, fallback: false
    }
  }