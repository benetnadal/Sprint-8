import React from "react";

import { FitxaContainer} from "../styled"


 

const Fitxa = (props) =>{   

    return  (props.trigger)?

    //  <BotoEnorme onClick={props.tancarPopup}> 
        <FitxaContainer >
            <>

            <div><p>{props.name.toUpperCase()}</p></div>

            <div>
                <img src={props.img} alt="" />
            </div>
 <div>
<ul>
    <li>MODEL: {props.model.toUpperCase()}</li>
    <li>STARSHIP CLASS: {props.class.toUpperCase()}</li>
    <li>MANUFACTURER: {props.manufacturer.toUpperCase()}</li>
    <li>COST: {props.cost}</li>    
</ul>

<ul>
    <li>CREW: {props.crew}</li>
    <li>PASSENGER CAPACITY: {props.pc}</li>
    <li>CARGO CAPACITY: {props.cc}</li>
    <li>CONSUMABLES: {props.cons.toUpperCase()}</li>    
</ul>

<ul>
    <li>LENGTH: {props.length}</li>
    <li>MAXIMUM ATMOSPHERING SPEED: {props.mas}</li>
    <li>HYPERDRIVE RATING: {props.hr}</li>
    <li>MAXIMUM SPEED IN REALSPACE: {props.msir}</li>    
</ul>

</div> 

</>
         </FitxaContainer>
    
:"";
     }

     export default Fitxa



    
