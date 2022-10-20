import Link from 'next/link';


export default function NavBar(){

    return(
        <div className="navbar">
                <Link href="/">
                    <div className='navbar'>
                        <div className="botaohome"><h3>Início</h3></div>
                        <div className="botaocidades"><h3>Planos de Gestão Municipal</h3></div>
                    </div>
                </Link>
        </div>
    )
}