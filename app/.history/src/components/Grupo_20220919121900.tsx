import { PrismaClient } from '@prisma/client';
import Links from './Links';

export default function Grupo({grupotitle, linked, grupo}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupotitle}</h4></div>
            <Links descricao1={linked.descricao} link1={linked.link}></Links>
            <Links descricao1={linked.descricao} link1={linked.link}></Links>
            <Links descricao1={linked.descricao} link1={linked.link}></Links>
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
    const linked = await prisma.link.findUnique({
        where:{
            idkey:1,
        }
    })
    return{
      props:{
        grupo,
        linked,
      },
    }
  }