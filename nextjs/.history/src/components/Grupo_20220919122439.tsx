import { PrismaClient } from '@prisma/client';
import Links from './Links';

export default function Grupo({grupotitle, linkLinks, descricaoLink}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupotitle}</h4></div>
            <Links descricao1={descricaoLink.descricao} link1={linkLinks.link}></Links>
            <Links descricao1={descricaoLink.descricao} link1={linkLinks.link}></Links>
            <Links descricao1={descricaoLink.descricao} link1={linkLinks.link}></Links>
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