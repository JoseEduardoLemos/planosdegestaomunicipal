import Link from 'next/link';
export default function CardPlano({imgsrc, title, link}){
    return(
        <Link href={link}>
        <div className="cardPlanoMiniatura">
            
            <div className="cardPlano">
                <div className="tituloCardPlano">
                    <h2>{title}</h2>
                </div>           
            </div>
              
        </div>
        </Link>  
    )
}