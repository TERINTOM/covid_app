import React from "react";
import "./CovidApp.css";

function CovidApp(){
    return(
        <div className="main-container">
            <section className="first-section">
                <ul>
                    <li>HOME</li>
                    <li>VACCINE REGISTRATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>SIGN UP</li>
                </ul>
                <div className="firstsection-flex">
                    <div className="left-first">
                        <h1>Welcome to Covid web <br /><span>we're all are responsible...Lets defeat COVID 19</span></h1>
                        
                    </div>
                    <div className="right-first">
                        <img  src="./OBJECTS.png" alt="bannerphoto" className="banner-image" />
                    </div>
                </div>
            </section>
        </div>

    );
}

export default CovidApp;