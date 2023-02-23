import "./Center.css"
import axios from "axios"
import VaxName from "./VaxName";
import { useEffect, useState } from "react";
import Dose from "./Dose";



const Center = (props) => {
  const [sel,setSel]=useState()
  const [sdi,setDis]=useState()
  const [dist,setDist]=useState([])
  const [st,setSt]=useState([])
  const [hospital,setHospital]=useState([])
  const [slectedhos,setSelectedhos]=useState()



  // api for the state for state selection


    useEffect(()=>{
      axios.get("https://cdndemo-api.co-vin.in/api/v2/admin/location/states").then((res)=>{setSt(res.data.states)})
   
    },[sel]);
    
    

    const stateHandler=(event)=>{
      setSel(event.target.value)
    }


   
// api for the district for district selection
    

    useEffect(()=>{
      axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/ ${sel ? sel:"1"}`).then((res)=>{setDist(res.data.districts)})
    },[sel])

     const districtHandler=(event)=>{
        setDis(event.target.value)
     }

// hospial api for hospital selection
 
useEffect(()=>{
  axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id= ${sdi ? sdi:"1" } &date=14-09-2021 `).then((res)=>{setHospital(res.data.centers)})
},[sdi])

 

 


    return ( 
        
        <div className="center">
          <div className="vaccine">
          <h1>Choose Vaccine Center</h1>
          </div>
         <div className="centerlist  gridone">
                
         <div className="state" >
            <h2>state</h2>
            <select className="dropdown" id="lang" onChange={stateHandler}>
              {st.map((store)=>(<option key={store.state_id} value={store.state_id}>{store.state_name}</option>))}
            </select>
          </div>


          <div  className="district">
            <h2 >district</h2>
            <select className="dropdown" id="lang" onChange={districtHandler}>
             {dist.map((district)=>(<option key={district.district_id} value={district.district_id}>{district.district_name}</option>))}
            </select>
          </div>


          <div className="pincode" >
            <h2>pincode</h2>
            <select className="dropdown" id="lang">
              <option value="">680508</option>
              <option value="">675843</option>
              <option value="">653473</option>
            </select>
          </div>
            </div>

            
            <Dose></Dose>
            <VaxName></VaxName>
           
            <div className="vaxnbox">
             {hospital.map((hospitalName,index)=>(<>

             <div key={index} className={slectedhos === hospitalName.name?'selectedd':'line'} onClick={()=>{setSelectedhos(hospitalName.name)
            props.onSelection(hospitalName.name)
            }} >
              <h5>{index+1}</h5>

              <div><h5>{hospitalName.name}</h5>
              <h5>{hospitalName.address}</h5>
              </div>
             <h5>.</h5>
             <h5>.</h5>

             <h5>{hospitalName.name === slectedhos?'selected':'select'}</h5>
             </div>

             </>))}
        </div>  
        </div>
     );
}
 
export default Center;