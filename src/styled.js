
import styled from "styled-components"




import images from "./images/stars.png"
import images1 from "./images/galaxy3.jpeg"










export const Container = styled.div`
display:flex;
flex-direction:column;`


export const Header = styled.div`
width:100%;
padding-top: 50px;
padding-bottom: 70px;
background-color: black;
border-bottom:1px solid grey;
color:white;
text-align: end;
background-image: url(${images});
background-size: 170px 75px;
 background-repeat: no-repeat;
 justify-content: end;
background-position: center;
margin: auto;
`
export const BotoHeaderEsq = styled.button`
width:100px;
text-align: center;
padding:0px 1px 1px 5px;

margin-right:15px;
color: #DECDCD;
font-size: 15px;
background-color: black;
border: 1px solid black;

 &:hover {
    color: white;
    <ddddd/>
  }
&:active {
    color: white;
  }
`

export const BotoHeaderDret = styled(BotoHeaderEsq)`
margin-right:65px;
`

export const Franja = styled.div`
width: 100%;
display:flex; 
border-bottom: 2px solid rgba(255,255,0,0.3);

justify-content: center;
background-color: black;
color:white;

`

export const DivNaus = styled.div`
width: 100%;
display:flex; 
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: black;
background-image: url(${images1});
 background-position: center;
  background-size: cover;
 background-repeat: no-repeat;
background-attachment: fixed;
margin: auto;

`

export const BotoNaus = styled.button`


width:900px;
text-align: start;
padding:5px 20px;
margin: 10px  auto;
border: 2px solid transparent;
border-radius: 5px;
color: grey;
background-color: rgba(255,255,255,0.1);
font-family: 'Mitr', sans-serif;




 &:hover {
    color: white;
border: 2px solid rgba(255,255,0,0.1);

  }
&:active {
    border-bottom: 1px solid white
  }


`

export const BotoFranja = styled.button`
width:100px;
text-align: center;
padding:12px 1px;
border: 2px solid #1C1C1C;
border-top: none;
border-bottom: none;
color: #DECDCD;
background-color: black;

 &:hover {
    color: white;
  }
&:active {
    color: white;
    border-bottom: 1px solid white
  }
`


export const FitxaContainer= styled.div`
display: flex;
flex-direction: column;
padding:10px 0px;
width: 100%;
background-color: rgba(255,255,0,0.05);
border:3px solid black;
border-radius: 10px;
color: rgba(255,255,0,0.7);
color: white;
align-items: center;
list-style: none;

font-family: 'Mitr', sans-serif;
`

export const ItemContainer1 = styled.div`
flex: 0 0 auto;
text-align: center;
list-style: none;

`

export const PetitContainer = styled.div`
display: flex;
 justify-content: space-between;
list-style: none;
`

export const ItemContainer2 = styled.div`

flex: 0 0 2;
 justify-content: center;
 padding: 5px 37px;
list-style: none;
`












/* export const Panell = styled.div`
width: 85%;
margin: 30px auto 30px;
border: 4px solid black;
border-radius: 14px;
padding: 20px;
` */









// rgba(0,0,0,0.6)


/* export const BotoEnorme= styled.button`
position: fixed;
top:0;
left:0;
width: 100%;
height: 100vh;
background-color: yellow;
display:flex;
justify-content:center;
align-items:center;
` */