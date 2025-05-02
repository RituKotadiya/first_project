import { useNavigate } from "react-router-dom";
import "./Homepage.css"
import image1 from "./image.png";
import image2 from "./image2.png";
import Footer from "../Footer/Footer"

function Homepage() {

   const navigate = useNavigate();

   const handleSigninClick = () => {
      navigate("/Signin");
   }

   const handleSignupClick = () => {
      navigate("/Signup");
   }

    return (
       <div className="nav">
            <nav className="a">
               <div className="n1">
               <img src={image1} className="image"></img>
             
               <ul className="li">
                  <a href="#"><li>Product</li></a>
                  <a href="#"><li>For teoms</li></a>
                  <a href="#"><li>Support</li></a>
               </ul>
               </div>
            <div className="b">
               <button onClick={handleSigninClick}>Signin</button>
               <button onClick={handleSignupClick}>Signup</button>
               </div>
            </nav>
           
        
            <img src={image2} className="im"></img>
            <Footer />

            
       </div>
       
      
    )
}

export default Homepage; 