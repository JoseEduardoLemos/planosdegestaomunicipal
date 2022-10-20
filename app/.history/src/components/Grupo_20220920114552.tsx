import { PrismaClient } from "@prisma/client";
import Links from "./links";


export default function Grupo({Grupo}){
    return(
        <div className="grupoMunicipio">
            <div className="tituloCard"><h4>{Grupo.descricao}</h4></div>
            <div>
            {
                Grupo.map(grupo =>{
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
    const Grupo = await prisma.grupo.findMany({
        where:{
            idkey_municipio : 1
        }
    })
    return{
        props:{
            Grupo,
        }
    }    
}