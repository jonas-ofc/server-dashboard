
function sortServers(sort, dataArr) {
  let serverList = [...dataArr]
    
      if(sort === "default"){
         console.log(dataArr)
           
         return dataArr
            
        }
        if(sort === "responstime"){
            let sortedServers = serverList.sort((a, b) => b["lastresponsetime"] - a["lastresponsetime"]);
            return sortedServers
        }
        if(sort === "created"){
            let sortedServers = serverList.sort((a, b) => b["created"] - a["created"]);
            return sortedServers
     }
        if(sort === "status"){
            let sortedServers = serverList.sort((a, b) => b["status"] - a["status"]);
            return sortedServers
     }
        if(sort === "name"){
            let sortedServers = serverList.sort((a, b) => b["name"] - a["name"]);
            return sortedServers
        }
        if(sort === "host"){
            let sortedServers = serverList.sort((a, b) => b["host"] - a["host"]);
            return sortedServers
        }
        
}

export default sortServers;

