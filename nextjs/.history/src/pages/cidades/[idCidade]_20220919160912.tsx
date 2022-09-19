import { PrismaClient } from '@prisma/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';


interface CidadeProps {
  iddacidade:String;
}

export default function idCidade({iddacidade}:CidadeProps){
    const router = useRouter();
    const {idCidade} = router.query;

    return (
      <div>
        <h1>TESTE DE RETORNO</h1>
        <h3>Essa aqui é a cidade: {idCidade}</h3>
      </div>
    )
  }

  export const getStaticProps: GetStaticProps = async({params}) =>{

    const idCidade = params?.idkey;
    return {
      props:{
        idCidade,
      }
    }
  }

  export const getStaticPaths: GetStaticPaths = async() =>{
    const prisma = new PrismaClient();
    const cidades = await prisma.cidade.findMany();
    
    const paths = cidades.map((cidades) =>({
      params: {idkey : cidades.idkey.toString()},
    }))

    return{
       paths, fallback: false
    }
  }