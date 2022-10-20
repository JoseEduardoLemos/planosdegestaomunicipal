
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
  const data = await res.json()

  // Pass data to the page via props
  return { props: 
    <res>{ data } </res>
  }
}
