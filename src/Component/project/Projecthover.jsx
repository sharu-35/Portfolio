import React from "react";
import './Projecthover.css'
import ecom from '../../assets/ecom.png'
import blog from '../../assets/blog.png'
import todo from '../../assets/todo.png'
const Projecthover = () => {
    return (
        <>
 <div className="container">
               
               <div className="card">
                   <img src={ecom} alt="ecommerce"  />
                   <div className="intro">
                       <h2  className="website">E-COMMERCE WEBSITE</h2>
                       <p className="project"> "Explore our online marketplace for the latest fashion trends and styles. Shop now and get fast shipping and easy returns!"</p>
                      
                   </div>
               </div>
               <div className="card">
                   <img src={blog} alt="blog"  />
                   <div className="intro">
                       <h2 className="website" >BLOG WEBSITE</h2>
                       <p className="project">Get inspired with our lifestyle blog, featuring stories on travel, wellness, and personal growth. Join our community and start living your best life."</p>
                      
                   </div>
               </div>
               <div className="card">
                   <img src={todo} alt="todo"  />
                   <div className="intro">
                       <h2 className="website" >TODO-APP</h2>
                       <p className="project">"Maximize your productivity with our advanced task management app. Set reminders, track progress, and celebrate your successes!"</p>
                      
                   </div>
              

               
           </div>
       </div>

           </>
    )
}
export default Projecthover