import { useRouter } from 'next/router';


export default function Cidade(){
    const router = useRouter();
    const {id} = router.query;
    return(
        <h1>
            Cidade acessada: {id}
        </h1>
    )
}