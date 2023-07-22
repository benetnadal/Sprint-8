import { useState } from "react";
import {InputSign, BotoSign, BotoClose, PanellPetitPrincipal, PanellPetitSecundari, Paragraf} from "../styled"





const PanellSignUp = (props) => {

const[email, setEmail] = useState("")
const[password, setPassword] = useState("")

const[flag, setFlag] = useState(false)

const[at, setAt] = useState(false)
const[length, setLength] = useState(false)
const[repeat, setRepeat] = useState(false)





const handleSubmit = (e) => {
     e.preventDefault();
     setFlag(false);
     setAt(false);
     setLength(false);
     setRepeat(false);





    if(!email || !password){setFlag(true)}
    else if(!email.includes("@")) {setAt(true)}
    else if(password.length < 6) {setLength(true)}
    else  if(JSON.stringify(email) in localStorage){setRepeat(true)}
        

    else{
        setFlag(false); setAt(false);  setLength(false);  setRepeat(false);


   
    localStorage.setItem(JSON.stringify(email), JSON.stringify(password));

    console.log("Usuari creat: " + email, "Password: " + password)

    console.log("saved in localstorage")
    props.funcio() // tancarem el panell amb funció screen1
    // setLogin(!login)
    }

}

return (

<>
<PanellPetitPrincipal>
        <PanellPetitSecundari>
            <>
            <BotoClose onClick={props.amaga}>{props.icon}</BotoClose>
            </>

            <form onSubmit={handleSubmit}>     

            <InputSign  type="text"  placeholder={props.placeholder1} onChange={event => setEmail(event.target.value)}/>  
            <InputSign type="password"  placeholder={props.placeholder2} onChange={event => setPassword(event.target.value)}/>          

            
            <div> 
            <BotoSign type="submit"><b>SIGN UP</b></BotoSign> 
            </div>

            {at && (<Paragraf><b>Introdueix un mail amb format correcte</b></Paragraf>)}
            {length && (<Paragraf><b>La Password ha de tenir un mínim de 6 caràcters</b></Paragraf>)}
            {repeat && (<Paragraf><b>Ja existeix aquest usuari. Crea´n un de nou o fes LogIn</b></Paragraf>)}

            {flag &&   
            (<Paragraf><b>S´han d´omplir tots els camps</b></Paragraf>)}


            </form>
        </PanellPetitSecundari>
     </PanellPetitPrincipal>

</>

)}


export default PanellSignUp