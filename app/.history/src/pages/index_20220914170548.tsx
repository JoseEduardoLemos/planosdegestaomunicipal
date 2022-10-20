import { PrismaClient } from '@prisma/client';

const  prisma = new PrismaClient();

export async function getServerSideProps(){
    const links = await prisma.links.findMany();
  return{
    props:{
      initialLinks: links
    }
  }
}





export default function App(){
  return(
    <div> 
      <h1>testando const</h1>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:5555/')
  

  // Pass data to the page via props
  return { props: 
    { res } }
}
