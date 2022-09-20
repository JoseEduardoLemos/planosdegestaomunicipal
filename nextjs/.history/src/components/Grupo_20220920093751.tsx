import { Link } from "@mui/material";


export default function Grupo({grupotitle, link1,
   descricao, link2, descricao2,link3,descricao3}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupotitle}</h4></div>
            <div>
            <div className="grupo">
                <div>
                    <h5>{descricao}</h5>
                </div> 
                <div>
                    <Link target={"_blank"}  href={link1}>
                        <a className='linkscolor'>
                            <h5>Visualizar &#128065;</h5>
                        </a>
                    </Link>
                </div>          
            </div>
            <div className="grupo">
                <div>
                    <h5>{descricao2}</h5>
                </div> 
                <div>
                    <Link target={"_blank"}  href={link2}>
                        <a className='linkscolor'>
                            <h5>Visualizar &#128065;</h5>
                        </a>
                    </Link>
                </div>          
            </div>
            <div className="grupo">
                <div>
                    <h5>{descricao3}</h5>
                </div> 
                <div>
                    <Link target={"_blank"} href={link3}>
                        <a className='linkscolor'>
                            <h5>Visualizar &#128065;</h5>
                        </a>
                    </Link>
                </div>          
            </div>      
        </div>
        </div>
    )
}