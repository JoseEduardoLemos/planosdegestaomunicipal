import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


function Links({links}){
}
  export async function getStaticProps(){
    const res = await fetch('https://www.tributech.com.br/')
    const links = await res.json()

  return {
    props:{
      links,      
    },
  }
}
export default Links