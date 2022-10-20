import { Link } from "@mui/material";
import { PrismaClient } from "@prisma/client";


export default function Links({link}){
    return(            
            <div className="grupo">
                <div>
                    <h5>{link.descricao}</h5>
                </div> 
                <div>
                    <Link target={"_blank"} href={link.link}>
                        <a className='linkscolor'>
                            <h5>Visualizar &#128065;</h5>
                        </a>
                    </Link>
                </div>          
            </div>      
    )
}

export async function getServerSideRender(){
    const prisma = new PrismaClient();
    const link = await prisma.link.findMany({
        where:{
            idkey_grupos : 1 //esse valor deve ser dinâmico
        }
    })
    return{
        props:{
            link,
        }
    }    
}