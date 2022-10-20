import { Button } from '@mui/material';
import Link from 'next/link';


export default function NavBar(){

    return(
        <div className="navbar">
                <div className="botaohome"><Link href="/"><Button className='btnHome'><h3>Início</h3></Button></Link></div>
                <div className="botaocidades"><h3>Planos de Gestão Municipal</h3></div>
        </div>
    )
}