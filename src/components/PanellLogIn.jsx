import { useState } from "react";
import {InputSign, BotoSign, BotoClose, PanellPetitPrincipal, PanellPetitSecundari, Paragraf} from "../styled"
import BarraNav from "./BarraNav";





const PanellLogIn = (props) => {

const[emailLog, setEmailLog] = useState("")
const[passwordLog, setPasswordLog] = useState("")
const[at, setAt] = useState(false)
const[length, setLength] = useState(false)
const[flag, setFlag] = useState(false)
const[home, setHome] = useState(true)
const[passError,setPassError] = useState(false)
const[noUser,setNoUser] = useState(false)




const handleLogin = (e) => {
     e.preventDefault();


     setFlag(false);
     setAt(false);
     setLength(false);
     setPassError(false);
     setNoUser(false);


     console.log(emailLog)

     let passwordCheck = localStorage.getItem(JSON.stringify(emailLog));  //password amb cometes (sinó et dóna null)
     let passwordCheck1="";
      if(passwordCheck){passwordCheck1 = passwordCheck.replace(/["]/g, "")}; //password sense cometes

  
    if(!emailLog || !passwordLog){setFlag(true)}
    else if(!emailLog.includes("@")) {setAt(true)}
    else if(passwordLog.length < 6) {setLength(true)} 
    
    else if(JSON.stringify(emailLog) in localStorage) {

        if(passwordLog == passwordCheck1){

            setHome(!home);

            console.log("Usuari logat: " + emailLog);
            console.log("Password Usuari logat: " + passwordLog);

            
        } else{setPassError(true)}

    }else{setNoUser(true)}    
 }
    


return (

<>{home? (



<PanellPetitPrincipal>
        <PanellPetitSecundari>
            <>
            <BotoClose onClick={props.amaga}>{props.icon}</BotoClose>
            </>

            

            <form onSubmit={handleLogin}>     

            <InputSign  type="text"  placeholder={props.placeholder1} onChange={event => setEmailLog(event.target.value)}/>  
            <InputSign type="password"  placeholder={props.placeholder2} onChange={event => setPasswordLog(event.target.value)}/>
            
            <div> 
            <BotoSign type="submit"><b>LOG IN</b></BotoSign> 
            </div>


            {at && (<Paragraf><b>Introdueix un mail amb format correcte</b></Paragraf>)}
            {length && (<Paragraf><b>La Password ha de tenir un mínim de 6 caràcters</b></Paragraf>)}
            {flag &&   
            (<Paragraf><b>S´han d´omplir tots els camps</b></Paragraf>)}

            {passError &&
            (<Paragraf><b>Password incorrecte</b></Paragraf>)}

            {noUser &&
            (<Paragraf><b>Aquest usuari no existeix. Crea un usuari si vols accedir.</b></Paragraf>)}

            </form>
        </PanellPetitSecundari>
     </PanellPetitPrincipal>

):(<BarraNav  actiu={true} ruta1="/" ruta2="/page2"/>)}
</>

)}


export default PanellLogIn


{/* <BarraNav disabled={false} actiu={true} ruta1="/" ruta2="/page2"/> */}