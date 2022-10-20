import { PrismaClient } from '@prisma/client';
import Grupo from '../components/Grupo';
import NavBar from '../components/NavBar';

export default function Cidade({grupo, linked}){
  return (
    <div>
      <NavBar></NavBar>
      <Grupo grupotitle={grupo.descricao} descricaoLink={linked.descricao} linkLinks={linked.link} />
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