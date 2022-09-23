import Link from 'next/link';
export default function Card({imgsrc, link}){
    return(
        <div className="cardMiniatura"><Link href={link}>

            <div className="card">

                <div className="imagemCard">
                    <img max-width="100%" width="50%" max-height="100%" className="imagemCard" src={imgsrc}>
                    </img>
                </div>
                {/* <div className="tituloCard">
                    <h2>{title}</h2>
                </div>            */}
            </div>
            </Link>      
        </div>
    )
}