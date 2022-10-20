import { PrismaClient } from '@prisma/client';
import { prisma } from '../components/lib/prisma';
const prisma = new PrismaClient()


function Links({links}){
}
  export async function getStaticProps(){
    //const res = await fetch('')
    //const links = await res.json()
    const links = await prisma.link.findMany()

    const data = Links.map(link => {
      return {
        idkey: Links.idkeyLinks,
        link: Links.link,
        descricao: Links.descricao
      }
    })

  return {
    props:{
      links,      
    },
  }
}
export default Links