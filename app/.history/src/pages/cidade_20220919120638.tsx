import { PrismaClient } from '@prisma/client';
import Grupo from '../components/Grupo';
import NavBar from '../components/NavBar';

export default function Cidade({grupo}){
  return (
    <div>
      <NavBar></NavBar>
      <Grupo grupotitle={undefined} descricao={undefined} link1={undefined} link2={undefined} descricao2={undefined} link3={undefined} descricao3={undefined}/>
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