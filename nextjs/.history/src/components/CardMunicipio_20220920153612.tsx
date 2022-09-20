import Link from 'next/link';
export default function CardMunicipio({idCidade, imgsrc, title, link}){
    return(
        <div className="cardmunicipio"><Link href={{pathname: `/cidades/${link}`, query: {idCidade} 
        }}>

            <div className="card">

                <div className="imagemCard">
                    <img max-width="150px" height="150px" className="imagemCard" src={imgsrc}>
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