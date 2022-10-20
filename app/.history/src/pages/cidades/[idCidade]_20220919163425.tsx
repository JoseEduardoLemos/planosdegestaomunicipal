import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';


interface CidadeProps {
  iddacidade:String;
}

export default function idCidade({iddacidade}:CidadeProps){
    const router = useRouter();
    const {idCidade} = router.query;

    return (
      <div>
          cidade: {iddacidade}
      </div>
    )
  }

  export const getStaticProps: GetStaticProps = async({params}) =>{

    const idCidade = params?.idkey.toString();
    return {
      props:{
        idCidade,
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