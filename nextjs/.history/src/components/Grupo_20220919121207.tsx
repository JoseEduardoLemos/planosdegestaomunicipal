import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

export default function Grupo({grupotitle}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupotitle}</h4></div>
            <Link href={''}></Link>
        </div>
    )
}
export async function getStaticProps(){
  
    const prisma = new PrismaClient();
    const grupo = await prisma.grupo.findUnique({
      where:{ 
        idkey: 1,
      }
    })
    return{
      props:{
        grupo,
      },
    }
  }