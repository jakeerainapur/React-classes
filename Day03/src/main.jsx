import {createRoot} from "react-dom/client";
import "./index.css";

function Profile() {
    return<div>
     <img src="C:\Users\HP\Pictures\profile_picture.jpeg" alt="no logo" />
   <h1>My Profile</h1>;
    <div className="card">
    
     <nav>
      <img className="logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBj0m1wajVSVYdMAq36XcDCyl-ioKTkW-GqG2V2ZiDTNdhzzh1YcOAwolH&s=10" alt=" Logo not found" />
        <h1 className="rule">Rules of JSX</h1>
     </nav>
     <ul className="tables">
      <li>Must enclosed JSX in a Root Element</li>
      <li> Choose the tags Property</li>
      <li> use className for selector not for class</li>
      <li> Use camelcase for attributes</li>
      <li> use flower braces for js</li>
     </ul>   
   </div>
 
 
   </div>

  

}
 createRoot(document.getElementById("root"))
 .render(
 <> 
  <Profile/>
   <Profile/>
 </>
 );
