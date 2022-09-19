import Link from 'next/link';
export default function CardMunicipio({title, link, imgsrc}){
    return(
        <div className="cardmunicipio"><Link href={link}>

            <div className="card">

                <div className="imagemCard">
                    <img max-width="150px" height="150px" src={imgsrc}>
                    </img>
                </div>
                <div className="tituloCard">
                    <h2>{title}</h2>
                </div>           
            </div>
            </Link>      
        </div>
    )
}