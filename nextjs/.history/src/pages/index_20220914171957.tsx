import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


function Links({links}){
}
  export async function getStaticProps(){
    const res = await fetch('../prisma/migrations/20220914192900_add_municipio_grupos_links/migration.sql')


  return(
  <ul>
      {links.map((Links)=>(
        <li>{Links.link}</li>
      ))}
  </ul>
  )
}
export default Links