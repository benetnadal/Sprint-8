import { DivInici, Container,  TexteInici, DivNausInici} from "../styled"

import HeaderNav from "../components/HeaderNav";
import BarraNav from "../components/BarraNav";




const Home = () => {

return(


 <Container>   
      
 <HeaderNav/>
{/* <BarraNav actiu={true} ruta1="/" ruta2="/page2"/> */}


 
<DivNausInici>
     <DivInici>
         <TexteInici>

            <p>En aquesta Web trobaràs les característiques tècniques 
                de les Naus de la coneguda saga d´Starwars.</p>
                  <p>Es tracta dels exercicis corresponents a l´Sprint 8 de l´IT Academy a on es posen 
                    en pràctica els conceptes adquirits 
                    durant la formació de React.</p>      
                    <p>Per accedir a la informació de les Naus has de ser un usuari registrat.</p>             
                
                
                </TexteInici> 


     </DivInici>


</DivNausInici>


</Container>


)}

export default Home;