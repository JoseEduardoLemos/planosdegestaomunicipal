import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


function Links({links}){
  return(
  <ul>
      {links.map((Links)=>(
        <li>{Links.link}</li>
      ))}
  </ul>
  )
}
export default Links