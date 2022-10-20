import { PrismaClient } from "@prisma/client";
import Links from "./links";


export default function Grupo({grupo}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{grupo.descricao}</h4></div>
            <div>
            {
                grupo.map(grupo =>{
                    return(
                        <Links link={undefined}></Links>
                    )
                })
            }
            </div>
        </div>
    )
}

export async function getServerSideRender(){
    const prisma = new PrismaClient();
    const grupo = await prisma.grupo.findMany({
        where:{
            idkey_municipio : 1
        }
    })
    return{
        props:{
            grupo,
        }
    }    
}