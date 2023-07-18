import { BotoHeaderDret,BotoHeaderEsq, Header } from "../styled";
import {FaRegUser} from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";






 const HeaderNav = () => {

    return(

<Header>
    <BotoHeaderEsq><b><FaArrowRightToBracket/>  LOGIN</b></BotoHeaderEsq>
    <BotoHeaderDret><b><FaRegUser/>  SIGN UP</b></BotoHeaderDret>
</Header>)
}

export default HeaderNav;