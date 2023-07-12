import  {useEffect, useState} from 'react';
import axios from "axios";
import {BotoNaus, DivNaus, Header} from "./styled"



const App = () => {

const [namemodel, setNamemodel] = useState([{length: null, name: null, model: null}]);//Si no és una array et donarà error per això utilitza les claus [] 

 console.log(namemodel)

   useEffect(() => {
    axios.get('https://swapi.dev/api/starships/?page=1') 
    
    .then(res => {    
     

       setNamemodel(res.data.results.map(data => {return ({length: data.length, name: data.name , model: data.model})}))

       //El length és per atribuir-li una key al llistat, no hi ha cap length igual en les 36 naus

       

 
  })}, []);  

  return  (
  
  <DivNaus>

    {/* <Header>LOGIN / SIGN UP</Header> */}

{namemodel.map(info => {return(

<div key={info.length}> 
<BotoNaus>
<p>{info.name}</p>
<p>{info.model}</p>
</BotoNaus>
</div>
)})}

</DivNaus>  
  ) 
  };


export default App;




