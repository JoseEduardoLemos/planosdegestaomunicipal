import { prisma } from "@prisma/client";
import { SYMBOL_CLEARED_COOKIES } from "next/dist/server/api-utils";



export default function App({Links}){
  return(
    <div>
      <h1>teste</h1>
      <p className="text-lg">
        {JSON.stringify(Links, null, 2)}
      </p>
    </div>
  )
}

export async function getStaticProps(){
  const cidade = await prisma[SYMBOL_CLEARED_COOKIES].findMany({
    
  })

  return { props: { title: 'My Title', content: '...' } }

}
    