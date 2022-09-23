import Link from 'next/link';


export default function NavBar(){

    return(
        <div className="navbar">
                <Link className="botaohome" href="/">
                    <h3>Municípios</h3>
                </Link>
                <div className="botaocidades"><h3>Planos de Gestão Municipal</h3></div>
        </div>
    )
}