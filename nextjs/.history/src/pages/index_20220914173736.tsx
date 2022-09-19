import { GetServerSideProps } from "next"

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

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await prisma.Links.findMany()

  const data = tasks.map(task => {
    return {
      id: idkeyLink,
      link: link,
      descricao: descricao
    }
  })
}