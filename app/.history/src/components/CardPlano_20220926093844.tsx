import Link from 'next/link';
export default function CardPlano({imgsrc, title, link}){
    return(
        <div className="cardPlanoMiniatura">
            
            <Link href={link}>
            <div className="cardPlano">
                <div className="tituloCardPlano">
                    <h2>{title}</h2>
                    <img className='imagemPlanoMiniatura' src={imgsrc} alt=""/>
                </div>           
            </div>
            </Link>      
        </div>
    )
}