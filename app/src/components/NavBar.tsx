import Link from 'next/link';


export default function NavBar(){

    return(
        <div className="navbar">
                <Link className="botaohome" href="/">
                    <div className="botaohome"><h3>Municípios</h3></div>
                </Link>
                <div className="botaocidades"><h3>Planos de Gestão Municipal</h3></div>
        </div>
    )
}