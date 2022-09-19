import Grupo from '../../components/Grupo';
import NavBar from '../../components/NavBar';

export default function Paicandu(){
    return (
      <div>
        <NavBar></NavBar>
        <br></br>
        <div id="titulosite">
          <h1 className="titulocidade">Planos de Gestão Municipal para Paiçandu</h1>
          <img className="imagemtitulocidade" src='https://www.mbi.com.br/mbi/files/media/image/simbolopedia/municipio-paicandu-brasao-simb-brsspr0300917503.jpg'></img>
        </div>
        <Grupo 
          grupotitle='CONFERÊNCIA PÚBLICA MUNICIPAL'
          link1='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/fuYmqlmr9HaAkGnm64IZq8ZBRXvykbUQFmSHUYCRf1veSN4Df28CFb_FAxNb8gSE/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/I%20AUDI%C3%8ANCIA%20P%C3%9ABLICA%20Astorga-%20PDMU.pptx.pdf'
          descricao='Audiência Pública de Astorga - PDMU'
          link2='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Wnqc6NGpLD2Nc8QcxhH1eFj8uiVyWH6HjHQATZ4b1eMdWu1kqtCvHKfg2-DpiLtq/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Informe%20I%20-%20Astorga.pdf'
          descricao2='INFORMATIVO DO PLANO DE MOBILIDADE URBANA DO MUNICÍPIO DE ASTORGA'        
          link3='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/S69Pn0Dbf2Hi2phight-EZ7Xddf_UYy5Yo8rKNrdfRDyiSH7roVt8kaFd8F3_KPH/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Pauta%20-%20Reuni%C3%A3o%20t%C3%A9cnica%20-%20Astorga.pdf' 
          descricao3='PAUTA DA PRIMEIRA REUNIÃO TÉCNICA DO PLANO DE
          MOBILIDADE URBANA DE ASTORGA'
        ></Grupo>

        <Grupo 
          grupotitle='CONFERÊNCIA PÚBLICA MUNICIPAL'
          link1='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/fuYmqlmr9HaAkGnm64IZq8ZBRXvykbUQFmSHUYCRf1veSN4Df28CFb_FAxNb8gSE/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/I%20AUDI%C3%8ANCIA%20P%C3%9ABLICA%20Astorga-%20PDMU.pptx.pdf'
          descricao='Audiência Pública de Astorga - PDMU'
          link2='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Wnqc6NGpLD2Nc8QcxhH1eFj8uiVyWH6HjHQATZ4b1eMdWu1kqtCvHKfg2-DpiLtq/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Informe%20I%20-%20Astorga.pdf'
          descricao2='INFORMATIVO DO PLANO DE MOBILIDADE URBANA DO MUNICÍPIO DE ASTORGA'        
          link3='https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/S69Pn0Dbf2Hi2phight-EZ7Xddf_UYy5Yo8rKNrdfRDyiSH7roVt8kaFd8F3_KPH/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Pauta%20-%20Reuni%C3%A3o%20t%C3%A9cnica%20-%20Astorga.pdf' 
          descricao3='PAUTA DA PRIMEIRA REUNIÃO TÉCNICA DO PLANO DE
          MOBILIDADE URBANA DE ASTORGA'
        ></Grupo> 
      </div>
    )
  }