import { BotoHeaderDret,BotoHeaderEsq, Header } from "../styled";
import {FaRegUser} from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";



import PanellSignUp from "./PanellSignUp"
import PanellLogIn from "./PanellLogIn"







 const HeaderNav = () => {

    const [screenSign, setScreenSign] = useState(false)
    const [screenLog, setScreenLog] = useState(false)


const screen1 = () => {
    return(
        setScreenLog(false),
    setScreenSign(!screenSign));
}

const screen2 = () => {
    return(
        setScreenSign(false),
    setScreenLog(!screenLog))
}


    return(
<>
<Header>
    <BotoHeaderEsq onClick={screen2}><b><FaArrowRightToBracket/>  LOGIN</b></BotoHeaderEsq>
    <BotoHeaderDret onClick={screen1}><b><FaRegUser/>  SIGN UP</b></BotoHeaderDret>
</Header>

 {screenSign && 

<PanellSignUp amaga={screen1} icon={<AiOutlineClose/>} placeholder1="Email Adress" placeholder2="Password" funcio = {screen1}/> 
 } 


{screenLog &&

<PanellLogIn amaga={screen2} icon={<AiOutlineClose/>} placeholder1="Email Adress " placeholder2="Password" funcio = {screen2}/>}




{/*  {screenSign && 

<PanellRegistre amaga={screen1} icon={<AiOutlineClose/>} placeholder1="Email Adress" placeholder2="Password"/> 
 } 

{ screenLog &&

<PanellLog amaga={screen2} icon={<AiOutlineClose/>} placeholder1="beniiiiii " placeholder2="pASSIIII"/>
} 
 */}
</>
    )
}





export default HeaderNav;