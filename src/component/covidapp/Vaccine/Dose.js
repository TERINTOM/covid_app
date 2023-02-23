import { useState } from "react";
import "./Dose.css"
const Dose = () => {
 const age=['18+','45+'];
 const paid=['free','paid'];
 const firstdose=['firstdoses'];
 const [ag,setag]=useState('18+');
 const [pa,setpa]=useState('free');
 const [dose,setDose]=useState('firstdoses');
  const cardstyle3='card3'
    return (
         <div className="radio-button">
          <div className="age-radiobttn">
          {
            age.map((ages,index)=>(
                <label key={index} className={ `${ ag=== ages ? cardstyle3 +' card5 ': cardstyle3}` } >
                    <input onChange={(e)=>{setag(e.target.value)}} type={"radio"} name="bttns" value={ages} check="" />
                    {ages} 
                </label>
            )
            )
          }
          </div>
          <div className="paid-radiobttn">
            {
              paid.map((paids,index)=>(
                <label key={index} className={ `${pa===paids ? cardstyle3 + ' card5 ': cardstyle3}`}>
                  <input onChange={(e)=>{setpa(e.target.value)}} type={"radio"} name="bttnss" value={paids} check="" />
                  {paids}
                </label>
              ))
            }

          </div>
          <div className="age-radiobttn">
          {
            firstdose.map((first,index)=>(
                <label key={index} className={ `${ dose === dose  ? cardstyle3 +' card5 ': cardstyle3}` } >
                    <input onChange={(e)=>{setDose(e.target.value)}} type={"radio"} name="bttns" value={first} check="" />
                    {first} 
                </label>
            )
            )
          }
          </div>
      
         </div> 
         );
}
 
export default Dose;