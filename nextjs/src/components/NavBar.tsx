import Link from 'next/link';


export default function NavBar(){

    return(
        <div className="navbar">

            <div className="botaohome"><Link href="/"><h3>Início</h3></Link></div>
            <div className="botaocidades"><h3>Planos de Gestão Municipal</h3></div>

        </div>
    )
}