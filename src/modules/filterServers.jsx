import {useState, useEffect} from "react"
function filterServers(filter, dataArr) {
  
    
      if(filter === "auto"){
         console.log(dataArr)
           
         return dataArr
            
        }
        if(filter === "down"){
         let downFiltered = dataArr.filter(server => server.status.includes("down"));
         return downFiltered
        }
        if(filter === "paused"){
        let pausedFiltered = dataArr.filter(server => server.status.includes("paused"));
         return pausedFiltered
     }
        if(filter === "up"){
         let upFiltered = dataArr.filter(server => server.status.includes("up"));
         return upFiltered
     }
        if(filter === "<500"){}
        if(filter === ">500"){}
        
}

export default filterServers;

