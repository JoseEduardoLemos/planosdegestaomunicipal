import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


function Links({links}){
}
  export async function getStaticProps(){
    const res = await fetch('postgresql://sites:sites@localhost:5432/documentos?schema=documentos')
    const links = await res.json()

  return {
    props:{
      links,      
    },
  }
}
export default Links