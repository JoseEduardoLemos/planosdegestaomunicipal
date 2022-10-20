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
