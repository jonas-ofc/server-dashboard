import dataHandler from "./modules/dataHandler"
import { useState, useEffect, useRef,} from 'react';
import "./styles/App.scss"
import DashboardView from './components/DashboardView';
import ReactSwitch from "react-switch";
import Nav from './components/Nav';
import filterServers from "./modules/filterServers";
import sortServers from "./modules/sortServers";

import { createContext } from "react"
const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")
 
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  };

  const [fullData, setData] = useState([]);
    useEffect(() => {
      const updateData = async () => {
        const response = await fetch ("https://oak-digital-proxy-server.herokuapp.com")
        const data = await response.json()
        setData(data)
      }
      updateData()
      const interval = setInterval(updateData, 10000);
      return () => clearInterval(interval);
    }, []);

    
    let checksHandled = [];
    if(fullData.checks){
      
      let serverChecks = [...fullData.checks];

      checksHandled = [...dataHandler(serverChecks)];
      
      
  }  

  
  /*  æet checksHandled = [];
    if(fullData.checks){
      
      let serverChecks = [...fullData.checks];

      checksHandled = [...dataHandler(serverChecks)];
     
  } */

   

  /* function setServerFilter(serverFilter){
    console.log(serverFilter)
    useEffect(() => {
     setFilter(serverFilter);
     
    }, [serverFilter]);

    
  } */

    
  

 
  function setSortServers(){}





  const [filter, setFilter] = useState("auto");
 
  
  const [filteredServers, setFilteredServers] = useState([])

    useEffect(() => {
   
      let data = filterServers(filter, checksHandled)
      
      setFilteredServers(data)
    
     
    }, [fullData, filter]);


    const [sort, setSort] = useState("default");


  


  const [sortedServers, setSortedServers] = useState([])
    
        useEffect(() => {
       
          let data = sortServers(sort, filteredServers)
          
          setSortedServers(data)
        
         
        }, [filteredServers, sort]);

      const [filterButtons, setFilterButtons] = useState("none");
      
      const [sortButtons, setSortButtons] = useState("none");
       



       /*  function displayList(){
          let style = {}
          if(isOpen){
            style = {
              display: "block"
            }}
            else{
              style = {display: "none"}
            
            }
          
        
        } */

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <header>
      <Nav />
      <div className="switch">
      <ReactSwitch 
      onChange={toggleTheme} 
      checked={theme === "dark"} 
      width={80}
      height={40.39}
      offColor="#8cd3ff" 
      checkedIcon={<svg viewBox="0 0 512 512"><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z" fill="#dcdcdc"/></svg>}
      uncheckedIcon={<svg viewBox="0 0 512 512"><path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z" fill="#F9D71C"/></svg>}
      onColor="#303030"
      onHandleColor="#a19f9f"
      borderRadius={15}/> 
      </div>
      </header>
  <div className="manipulate-arrays">
      <div className="filter-buttons" onClick={()=>{if(filterButtons==="none"){setFilterButtons("inline-block")}else{setFilterButtons("none")}}}>
      <p>FILTER</p>
         <ul style={{display: filterButtons}} > 
            <li><input type="button" value="down" onClick={() => setFilter("down")}/></li>
            <li><input type="button" value="up" onClick={() => setFilter("up")}/></li>
            <li><input type="button" value="paused" onClick={() => setFilter("paused")}/></li>
            <li><input type="button" value="all" onClick={() => setFilter("auto")}/></li>
         </ul>
         </div>
         <div className="sort-buttons" onClick={()=>{if(sortButtons==="none"){setSortButtons("inline-block")}else{setSortButtons("none")}}}>
     <p>SORT</p>
     <ul style={{display: sortButtons}} > 
            <li><input type="button" value="default" onClick={() => setSort("default")}/></li>
            <li><input type="button" value="responsetime" onClick={() => setSort("responstime")}/></li>
            <li><input type="button" value="status" onClick={() => setSort("status")}/></li>
            <li><input type="button" value="created" onClick={() => setSort("created")}/></li>
            <li><input type="button" value="name" onClick={() => setSort("name")}/></li>
            <li><input type="button" value="host" onClick={() => setSort("host")}/></li>
         </ul>
      </div>
      </div>

      <DashboardView checksData={sortedServers}></DashboardView>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
