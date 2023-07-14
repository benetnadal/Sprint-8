import  {useEffect, useState} from 'react';
import axios from "axios";
import {BotoNaus, DivNaus} from "./styled"
import Fitxa  from './components/Fitxes';



const App = () => {

const [namemodel, setNamemodel] = useState([{ name: null, model: null, class: null, manufacturer: null, cost: null, crew: null, passengers: null, cargo: null, consumables: null, length: null, mas: null, hr: null, msirs: null, url: null}]);//Si no és una array et donarà error per això utilitza les claus [] 

const [fitxa, setFitxa] = useState(-1)

   useEffect(() => {
    axios.get('https://swapi.dev/api/starships/?page=1') 
    
    .then(res => {    
     

       setNamemodel(res.data.results.map(data => {return ({name: data.name , model: data.model, class: data.starship_class, manufacturer: data.manufacturer, cost: data.cost_in_credits, crew: data.crew, passengers: data.passengers, cargo: data.cargo_capacity, consumables: data.consumables, length: data.length, mas: data.max_atmosphering_speed, hr: data.hyperdrive_rating, msirs:data.MGLT, url: data.url.replace(/[^0-9]+/g, "")})}))

       //El length és per atribuir-li una key al llistat, no hi ha cap length igual en les 36 naus
  })}, []);  


  const handleclick = (e) => {
    if (fitxa === -1){setFitxa(e.target.value)}else{setFitxa(-1)}
}



  return  (
  
  <DivNaus>

    {/* <Header>LOGIN / SIGN UP</Header> */}

{namemodel.map( (info, index) => {return(

<div key={index}> 
<BotoNaus  value={index}  onClick={handleclick}>  

<p>{info.name}</p>
<p>{info.model}</p>

</BotoNaus>

<Fitxa trigger={fitxa == index} name={namemodel[index].name}img={"https://starwars-visualguide.com/assets/img/starships/" + namemodel[index].url + ".jpg"} model={namemodel[index].model} class={namemodel[index].class} manufacturer={namemodel[index].manufacturer} cost={namemodel[index].cost + " CREDITS"} crew= {namemodel[index].crew} pc= {namemodel[index].passengers} cc= {namemodel[index].cargo + " TONS"} cons= {namemodel[index].consumables} length= {namemodel[index].length + " METERS"} mas= {namemodel[index].mas + " KM/H"} hr= {namemodel[index].hr} msir= {namemodel[index].msirs + " MGLT"}/>

</div>
)})}

</DivNaus>  
  ) 
  };


export default App;




