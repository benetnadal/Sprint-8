import React from "react";

import { FitxaContainer, ItemContainer1,ItemContainer2, PetitContainer} from "../styled"


 

const Fitxa = (props) =>{   

    return  (props.trigger)?

    //  <BotoEnorme onClick={props.tancarPopup}> 
        <FitxaContainer >
            <>

            <div><b><p>{props.name.toUpperCase()}</p></b></div>

            <div>
                <img src={props.img} alt="" />
            </div>
 <div>
    <ul>
    <ItemContainer1>

    <li><b>MODEL:</b> {props.model.toUpperCase()}</li>
    <li><b>STARSHIP CLASS:</b> {props.class.toUpperCase()}</li>
    <li><b>MANUFACTURER:</b> {props.manufacturer.toUpperCase()}</li>
    <li><b>COST:</b> {props.cost}</li>    
</ItemContainer1>
</ul>
<ul>

    <PetitContainer>
<ItemContainer2>

    <li><b>CREW:</b> {props.crew}</li>
    <li><b>PASSENGER CAPACITY:</b> {props.pc}</li>
    <li><b>CARGO CAPACITY:</b> {props.cc}</li>
    <li><b>CONSUMABLES:</b> {props.cons.toUpperCase()}</li>    
</ItemContainer2>
<ItemContainer2>

    <li><b>LENGTH:</b> {props.length}</li>
    <li><b>MAXIMUM ATMOSPHERING SPEED:</b> {props.mas}</li>
    <li><b>HYPERDRIVE RATING:</b> {props.hr}</li>
    <li><b>MAXIMUM SPEED IN REALSPACE:</b> {props.msir}</li>    
</ItemContainer2>
</PetitContainer>
</ul>

</div> 

</>
         </FitxaContainer>
    
:"";
     }

     export default Fitxa



    
