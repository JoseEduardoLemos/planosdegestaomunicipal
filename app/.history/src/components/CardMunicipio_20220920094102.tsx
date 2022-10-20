import Link from 'next/link';
export default function CardMunicipio({imgsrc, title, link}){
    return(
        <div className="cardmunicipio"><Link href={link}>

            <div className="card">

                <div className="imagemCard">
                    <img max-width="150px" height="150px" border-radius="20px" src={imgsrc}>
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