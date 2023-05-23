import LoadingScreen from "../modules/LoadingScreen";
import ServerHandler from "./ServerHandler"
import Weather from "./Weather"
import Calendar from "./Calendar"
import filterServers from "../modules/filterServers"
import Warning from "./Warning"
import sortServers from "../modules/sortServers"

import { useState, useEffect, useRef } from 'react';
function DashboardView(props) {
 
   if(!props.checksData){
     console.log("no props");
    return <div><LoadingScreen></LoadingScreen></div>
 }

 const [serverData, setServerData] = useState([]);
 

 useEffect(() => {
setServerData(props.checksData)
}, [props.checksData]);


   const [day, setDay] = useState(0);
    useEffect(() => {
      const updateDay = () => {
     if(day<5){
        setDay(day + 1)
      }else{setDay(0)}
      }
   
      const interval = setInterval(updateDay, 5000);
      return () => clearInterval(interval);
    }, [day]);




   
      






    return (
      <div className="all-content">
         {/* <LoadingScreen/> */}
      <div className="dashboard-container">

       {/*   
          <div className="filter-buttons">
        <ul> 
          <li><input type="button" value="down" onClick={() => setFilter("down")}/></li>
        <li><input type="button" value="up" onClick={() => setFilter("up")}/></li>
        <li><input type="button" value="paused" onClick={() => setFilter("paused")}/></li>
        <li><input type="button" value="all" onClick={() => setFilter("auto")}/></li>
         </ul>
         </div>

         <div className="sort-buttons">
        <ul> 
            <li><input type="button" value="default" onClick={() => setSort("default")}/></li>
            <li><input type="button" value="responsetime" onClick={() => setSort("responstime")}/></li>
            <li><input type="button" value="status" onClick={() => setSort("status")}/></li>
            <li><input type="button" value="created" onClick={() => setSort("created")}/></li>
            <li><input type="button" value="name" onClick={() => setSort("name")}/></li>
            <li><input type="button" value="host" onClick={() => setSort("host")}/></li>
         </ul>
      </div>
 */}
      <div className="weather-container">
         <Weather/>
         </div>
      <div className="calendar-container">
         <Calendar calendarDay={day}/>
         </div>

      <div className="server-container"> 
    
      {serverData.map((server)=><ServerHandler data={server}/>)}</div>
{/* 
      <div className="loadingScreen">
         <LoadingScreen/>
      </div> */}
      
     {/*  <div className="warning-container"><Warning status={}></Warning></div>
       */}</div> 
       </div>
  
      )
   }
    
    export default DashboardView;
    