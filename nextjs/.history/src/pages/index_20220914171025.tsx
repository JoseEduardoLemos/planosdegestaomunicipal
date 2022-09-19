import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function getServerSideProps(){
    const links = await prisma.links.findMany();
  return{
    props:{
      initialLinks: links
    }
  }
}

