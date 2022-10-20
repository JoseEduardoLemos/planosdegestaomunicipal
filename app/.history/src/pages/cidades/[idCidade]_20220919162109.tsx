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
        [iddacidade] : {iddacidade}
      </div>
    )
  }

  export const getStaticProps: GetStaticProps = async({paths}) =>{

    const idCidade = paths?.idkey.toString();
    console.log(idCidade);
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
      params: {
        idkey : cidades.idkey.toString(),
        nome : cidades.nome,
        urlbrasao : cidades.urlbrasao,
      },
    }))

    return{
       paths, fallback: false
    }
  }