import Image from 'next/image';
import Link from 'next/link';
 
export default function Card({imgsrc, link}){
    return(
        <div className="cardMiniatura"><Link href={link}>

            <div className="card">

                <div className="imagemCard">
                    <Image max-width="100%" width="100%" height="100%" max-height="100%" className="imagemCard" src={imgsrc}>
                    </Image>
                </div>
                {/* <div className="tituloCard">
                    <h2>{title}</h2>
                </div>            */}
            </div>
            </Link>      
        </div>
    )
}