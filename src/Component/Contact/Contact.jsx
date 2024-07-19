import React from "react";
import './Contact.css'

import Contactinfocard from "../Contactinfocard/Contactinfocard";
import Contactform from "../Contactform/Contactform";
const Contact=()=>{
    return(
        <>
        <section  className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content"
            >
                <div  style={{flex:1}}>
                    <Contactinfocard
                    iconurl="https://static.vecteezy.com/system/resources/previews/012/909/513/original/purple-mail-icon-free-png.png"
                    text="sharuit123@gmail.com"/>
                    <br/>
                     <Contactinfocard
                    iconurl="https://i.pinimg.com/originals/71/58/b6/7158b69f137412c5790d8fa14ca6d6ad.png"
                    text="9994680126"/>
                </div>
                
                <div   style={{flex:1}}>
               <Contactform/>
            </div>
            </div>
            
            
            
            </section>
            <div className="footers">©️ 2024 Time To Program, Happy Coiding </div>
            </>
    )
}
export default Contact