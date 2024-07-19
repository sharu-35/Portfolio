import React from "react";
import './Project.css'
import Projecthover from "./Projecthover";
const Project = () => {
    return(
    <>
    <div className="project-container">
        <h3>Project</h3>
    </div>
    <div className="project-box">
        <div>
        <p>“Web development is the perfect blend of creativity and technical expertise,<br/> where innovation knows no boundaries.”</p>
        </div>
    <div className="box">
    <span className="image" ><img src="https://static.vecteezy.com/system/resources/previews/011/153/364/original/3d-website-developer-working-on-laptop-illustration-png.png"/></span>
    </div>
    <div>
       
    </div>
    </div>
    <Projecthover/>
    
    </>)
}
   
export default Project