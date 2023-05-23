
import LoadingScreen from "../modules/LoadingScreen";
import {useState, useEffect} from "react"
function ResAnimation(props) {
    
    if(!props){
        console.log("no props");
       return <div></div>
    }


    const [resData, setResData] = useState(""); 
    useEffect(() => {
   setResData(props.restime)
   }, [props]);


function styleAnimation(restime){
const res = restime;
let spinningAnima = {};
if(props.status==="down"){
  spinningAnima = {
      animation: `spinning 0s infinite linear reverse`,
      background: `conic-gradient(from 180deg, rgb(251,105,91), rgb(251,105,90, 0.279) 100%)`,
    }
    return spinningAnima;
  }

  if(props.status==="paused"){
    spinningAnima = {
        animation: `spinning 0s infinite linear reverse`,
        background: `conic-gradient(from 0deg, rgb(230,227,82), rgb(230,227,81, 0.279) 100%)`,
      }
      return spinningAnima;
    }
if(res<700){

  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(72,202,149, 0.279), rgb(106, 106, 106) ${1*res/10}%)`,
  }
return spinningAnima;
} if(res>=700 && res<1000){
  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(230,227,82, 0.5), rgb(106, 106, 106) ${1*res/10}%)`,
  }
  return spinningAnima;
}
else {
  spinningAnima = {
    animation: `spinning ${res/1000}s infinite linear reverse`,
    background: `conic-gradient(from 40deg, rgb(251,105,91, 0.5), rgb(106, 106, 106) ${1*res/10}%)`,
  }
  return spinningAnima;
}


 }

      function styleInnerCirkel(status){
       
      }
  return (
   <div className="res-animation">

        <div className="outer-cirkel" style={styleAnimation(resData)}>{/* <img src="./assets/outer-cirkel.svg" alt="" /> */}</div>
        
        <div className="inner-cirkel" style={styleInnerCirkel(props.status)}>{/* <img src="./assets/inner-cirkel.svg" alt="" /> */}</div>

      
   </div>
  )
}

export default ResAnimation;

