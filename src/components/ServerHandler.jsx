
import LoadingScreen from "../modules/LoadingScreen";
import ResAnimation from "../modules/ResAnimation"
import { useState, useEffect, useRef } from 'react';
import GetDate from "../modules/GetDate"
import Warning from "./Warning"

function ServerHandler(props) {
  
 

    if(!props.data){
        console.log("no props");
       return <div><LoadingScreen></LoadingScreen></div>
    }
       const [server, setServer] = useState({}); // Set rowData to Array of Objects, one Object per Row

       useEffect(() => {
        setServer(props.data)
        }, [props]);

     /*  console.log(server); */
    function changeBottomBox(status){
        let boxImg = {};
        
        if(status === "up"){

          boxImg = {
          
             backgroundImage: `url("/assets/wave.svg")`,
        
          }

        return boxImg
      }  
     

    
      
      if(status === "paused"){

        boxImg = {
           backgroundImage: `url("/assets/paused-wave.svg")`
        }

      return boxImg
    }

      if(status === "down"){
        
        boxImg = {
           backgroundImage: `url("/assets/down-wave.svg")`
        }

      return boxImg
    }


      }
  
      function responseTimeHandler(res, status){
      if(status === "up"){
      return <h2> {res} ms</h2>;
      }if(status === "down"){
        return <img src="/assets/down-icon.svg" alt="" />;
      }
      if(status === "paused"){
        return <img src="/assets/pause-icon.svg" alt="" />;
      }
      }

      function findDowntime(){
        const startSeconds = Math.floor((server.lastdownstart/1000)%60);
        const startMinutes = Math.floor((server.lastdownstart/1000/60)%60);
        const startHours = Math.floor((server.lastdownstart/1000/60/60)%24);
        
        const endSeconds = Math.floor((server.lastdownend/1000)%60);
        const endMinutes = Math.floor((server.lastdownend/1000/60)%60);
        const endHours = Math.floor((server.lastdownend/1000/60/60)%24);

        const calculatedSeconds = startSeconds-endSeconds;
        const calculatedMinutes = startMinutes-endMinutes;
        const calculatedHours = startHours-endHours;

        return [
          startHours.toString().padStart(2, "0"),
          startMinutes.toString().padStart(2, "0"),
          startSeconds.toString().padStart(2, "0")
      ].join(":");
      }

      
      const [serverWarning, setWarning] = useState("");


      function usePrevious(value) {
       const ref = useRef();
       useEffect(() => {
         ref.current = value;
       });
       return ref.current;
     }
     const prevServerStatus = usePrevious(server.status);
     
     
     useEffect(() => {
       if(server.status !== prevServerStatus && server.status === "down"){
         setWarning("warning");
         console.log(serverWarning)
       }
       if(server.status === "up" || server.status === "paused"){
         setWarning("none")
         /* console.log("WARNING!!!", server.status)
        */
       }
     },[server.status]);
 
    /*  let confirmedWarning = false;
  */
    const [serverWarningStyle, setWarningStyle] = useState({}); 
   
 
     useEffect(() => {
       if(serverWarning === "warning"){
        console.log("WAAAAARNING!!!");
       /*  alert("THIS IS A WARNING MTF");
        */
        setWarningStyle({
          display: "block",
          
          animation: "4s ease-out 1s 1 forwards slideOut" //SKAL VÆRE FORWARDS!!!!!!
        })
       }else{
         setWarningStyle({
           display: "none",
          
          
         })
       }
     },[ serverWarning ]);
 
     
 
       
 
      
 
 

  return (<>
   <article className="server" id={server.id}>
     <div className="res-animation-wrapper">
        <ResAnimation restime={server.lastresponsetime} status={server.status}></ResAnimation> 
     </div>
     <div className="data-wrapper">
     <h2 className="server-created" data-field="created">{<GetDate timeCreated={server.created}></GetDate>}</h2>
     <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
    
    
     
     <div className="server-lastresponsetime" data-field="response">{responseTimeHandler(server.lastresponsetime, server.status)}</div>
     
     <div className="bottom-box" style={changeBottomBox(server.status)}>
     </div>
     
    <h2 className="server-status" data-field="status">{server.status}</h2>
    
    <h2 className="server-name" data-field="site">{server.name}</h2>
    <h2 className="server-hostname" data-field="host">{server.hostname}</h2>
    <h2 className="server-type" data-field="type">{server.type}</h2>
   {/* {displayServerWarning()}  */}
   </div>
   </article>
   <div className="warning-wrapper" style={serverWarningStyle} >

     <div className="warning-server-wrapper">
     <h1>{server.name} IS DOWN!</h1>
     <p>Last server downtime: {findDowntime()}</p>
    {/*  <p>{console.log(server)}</p> */}
     <article className="server" id={server.id}>
     <div className="res-animation-wrapper">
        <ResAnimation restime={server.lastresponsetime} status={server.status}></ResAnimation> 
     </div>
     <div className="data-wrapper">
     <h2 className="server-created" data-field="created">{<GetDate timeCreated={server.created}></GetDate>}</h2>
     <h2 className="server-resolution" data-field="resolution">{server.resolution}</h2>
    
    
     
     <div className="server-lastresponsetime" data-field="response">{responseTimeHandler(server.lastresponsetime, server.status)}</div>
     
     <div className="bottom-box" style={changeBottomBox(server.status)}>
     </div>
     
    <h2 className="server-status" data-field="status">{server.status}</h2>
    
    <h2 className="server-name" data-field="site">{server.name}</h2>
    <h2 className="server-hostname" data-field="host">{server.hostname}</h2>
    <h2 className="server-type" data-field="type">{server.type}</h2>
   {/* {displayServerWarning()}  */}
   </div>
   </article></div> 
   </div>
   </>
  )
}

export default ServerHandler;

