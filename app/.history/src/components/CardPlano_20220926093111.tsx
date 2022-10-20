import Link from 'next/link';
export default function CardPlano({imgsrc, title, link}){
    return(
        <div className="cardPlanoMiniatura">
            <img className='imagemPlanoMiniatura' src={imgsrc} alt=""/>
            <Link href={link}>
            <div className="cardPlano">
                <div className="tituloCardPlano">
                    <h2>{title}</h2>
                </div>           
            </div>
            </Link>      
        </div>
    )
}