import Link from 'next/link';

export default function Grupo({descricao1, link1, descricao2, link2, descricao3, link3}){
    return(
        <div>
            <div className="grupo">
                <div>
                    <h5>{descricao1}</h5>
                </div> 
                <div className="link">
                    <Link href={link1}><a className='linkscolor' target='_blank'>
                        <h5>Visualizar &#128065;</h5></a></Link>
                </div>          
            </div>      

            <div className="grupo">
                <div>
                    <h5>{descricao2}</h5>
                </div> 
                <div className="link">
                    <Link href={link2}><a className='linkscolor' target='_blank'>
                        <h5>Visualizar &#128065;</h5></a></Link>
                </div>          
            </div>

            <div className="grupo">
                <div>
                    <h5>{descricao3}</h5>
                </div> 
                <div className="link">
                    <Link href={link3}><a className='linkscolor' target='_blank'>
                        <h5>Visualizar &#128065;</h5></a></Link>
                </div>           
            </div>
        </div>
    )
}