import Link from 'next/link';
export default function Card({imgsrc, link, nomeCidade}){
    return(
        <div className="cardMiniatura">
                <div className="card">
                <Link href={link}>
                    <div className="imagemCard">
                        <img max-width="100%" width="100%" height="100%" max-height="100%" className="imagemCard" src={imgsrc}>
                        </img>
                    </div> 
                    </Link>  
                <div className="tituloCard">
                    <h2>{nomeCidade}</h2>
                </div>
             </div>
        </div>
    )
}