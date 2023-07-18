import {Navbar, BotoNavbar, BotoNavbar1} from "../styled"
import {useNavigate} from "react-router-dom"


 const BarraNav = (props) =>{   
    
    const Navigate = useNavigate();    
    
    return(
<>
<Navbar>
      <BotoNavbar {...props} onClick={() => Navigate(process.env.PUBLIC_URL + props.ruta1)}><b>HOME</b></BotoNavbar>
      <BotoNavbar1 {...props} onClick={() => Navigate(process.env.PUBLIC_URL + props.ruta2)}><b>STARSHIPS</b></BotoNavbar1>
</Navbar>


</>
)}

export default BarraNav

