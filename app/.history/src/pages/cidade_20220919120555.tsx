import { PrismaClient } from '@prisma/client';
import NavBar from '../components/NavBar';

export default function Cidade({grupo}){
  return (
    <div>
      <NavBar></NavBar>
      <div>CIDADES</div>
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