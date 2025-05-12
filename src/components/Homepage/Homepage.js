import { useNavigate } from "react-router-dom";
import "./Homepage.css"
import image1 from "./image.png";
import image2 from "./image2.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import React, { useEffect } from "react";


function Homepage() {

   const navigate = useNavigate();

   // useEffect(() => {
   //   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
   //   if (!isLoggedIn) {
   //     alert("Please login first.");
   //     navigate("/");
   //   }
   // }, [navigate]);
 

   return (

      
      <>
      <Header/>
      <img src={image2} className="im"></img>
      <Footer/>
      </>

         
     
      





   )
}

export default Homepage; 