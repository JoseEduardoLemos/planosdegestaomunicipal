import NavBar from '../components/NavBar';
import '../styles/global.css';


function MyApp({Component,  pageProps}) {
    return(
    <>
        <div><NavBar></NavBar></div>
        <Component {...pageProps} />
    </> 
    )
} 
export default MyApp
 