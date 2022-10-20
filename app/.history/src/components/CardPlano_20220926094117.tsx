import Link from 'next/link';
export default function CardPlano({imgsrc, title, link}){
    return(
        <div className="cardPlanoMiniatura">
            
            <Link href={link}>
            <div className="cardPlano">
            <img className='imagemPlanoMiniatura' src={imgsrc} alt="" width='100%' height='100%' object-fit='cover' />
                <div className="tituloCardPlano">
                    <h2>{title}</h2>
                </div>           
            </div>
            </Link>      
        </div>
    )
}