import "./ThridPage.css"
const ThirdPage = (props) => {
    return ( 
        <div className="maindiv">
            <h2>Schedule an appointment</h2>

            <div className="hoscontainer">
                <div className="hosleft">
                    <h4>{props.avcent}</h4>
                    
                </div>
                <div className="hosright">
                <h6>select vaccination booth</h6>
                  <div className="boxthird"></div> 
                  
                </div>
            </div>

        </div>
     );
}
 
export default ThirdPage;