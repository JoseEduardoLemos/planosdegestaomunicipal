import { PrismaClient } from '@prisma/client';
import Links from './Links';

export default function Grupo({grupotitle, linked, grupo}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupotitle}</h4></div>
            <Links descricaoLink={linked.descricao} linkLinks={linked.link}></Links>
            <Links descricaoLink={linked.descricao} linkLinks={linked.link}></Links>
            <Links descricaoLink={linked.descricao} linkLinks={linked.link}></Links>
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