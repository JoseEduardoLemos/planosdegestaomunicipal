import NavBar from '../components/NavBar';
import '../styles/global.css';


function MyApp({Component,  pageProps}) {
    return(
    <>
        <Component {...pageProps} />
        <div><NavBar></NavBar></div>
    </> 
    )
} 
export default MyApp
 