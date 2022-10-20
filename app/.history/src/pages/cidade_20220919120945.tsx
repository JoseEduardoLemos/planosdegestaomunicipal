import { PrismaClient } from '@prisma/client';
import Grupo from '../components/Grupo';
import NavBar from '../components/NavBar';

export default function Cidade({grupo}){
  return (
    <div>
      <NavBar></NavBar>
      <Grupo grupotitle={grupo.descricao}/>
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