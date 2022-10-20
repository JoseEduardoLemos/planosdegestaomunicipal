
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
  return

}
    