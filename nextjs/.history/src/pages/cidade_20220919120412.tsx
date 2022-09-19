import { PrismaClient } from '@prisma/client';
import NavBar from '../components/NavBar';

export default function Cidade(){
  return (
    <div>
      <NavBar></NavBar>
      <div>CIDADES</div>
    </div>
  )
  
}

export async function getStaticProps(){
  
  const prisma = new PrismaClient();
  const cidade = await prisma.cidade.findUnique({
    where:{
      idkey: 1,
    }
  })
  return{
    props:{
      cidade,
    },
  }
}