import React, { useState } from "react";
import "./Selectionid.css"


function Selectionid(){
   
   const list=['Adhaar Id ', "Student Id","Passport","Birthcertificate"]
   const cardStyle= 'card';
   // const cardStyleo='card1';
   const [Bdr,setBdr]= useState('Adhaar Id');

   return(
     


 <section className="idproof-selection">
   <h1>Select Identification type</h1>
   <div className="grid-container " >
      {list.map((idnames,index) => (
         <label key={index}  className={  `${Bdr === idnames ? cardStyle + " card1 " : cardStyle}` } >
            <input  onChange={(e)=>{setBdr(e.target.value)}} type={"radio"} name="buttons" value={idnames} checked=""/>
            {idnames}
         </label>
      ))}



   
   </div>
   
    <div className="input-section">
   <h4 className="enter-adhaar">Enter your {Bdr} </h4>
    <input type="text" placeholder='123456' className="input-area"/>
   
   
    </div>
 </section>
   
    );
}



export default Selectionid;