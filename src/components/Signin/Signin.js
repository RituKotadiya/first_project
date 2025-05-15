import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Signin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signin() {

      const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignin = () => {

       

        console.log("Email = "+ email);

        console.log("Password = "+ password);

        // Session sotrage code
        let data = JSON.parse(sessionStorage.getItem("register"));
        if (data == null) {
            data = []
        }

       let metachData = data.filter((e) => e.email === email && e.password === password);


       if(metachData.length > 0){
        // succesfukk
        let data1 = [];
        data1.push({
           
            email: email,
            password: password
        });

        sessionStorage.setItem("login", JSON.stringify(data1));
        console.log("Successfully data");
        navigate("/");
       }else{
        //invalid
        setError("Pleae enter email and password");
       }
       
      
          //not a null value 
       if(email === "" || password === "")
        {
             console.log("Enter value");
        }
      
        else{
         setError("Invalid data");
        }
      
    }

   


    return (
        <>
        <Header/>
        <div className="main1">
            <div className="main">
                <div className="login">
                    <label><b>Sign In</b></label>
                </div>
                <div className="box">
                    <div className="emailaddress">
                        <label><b>Email address</b></label> <br />
                        <input className="in" placeHolder="  Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                    </div>
                    <div className="password">
                        <label><b>Password</b></label><br />
                        <input className="in" placeHolder="  Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {/* <div className="checkbox">
                        <input type="checkbox"></input>
                        <label>Remember me</label>
                    </div> */}
                </div>
                <div className="sub">
                    <button onClick={handleSignin} ><b>Submit</b></button>
                    {/* <button onClick={handleSignin}><b>Clear</b></button> */}

                    
               
                </div>

                {/* <div className="forgot">
                    <label>Forgot <a href="#">password ?</a></label>
                </div> */}

                <div className="validation">
                {error && <p style={{color: 'red'}}>{error}</p>}
                <p onClick={() => navigate('/Signup')} style={{cursor: 'pointer'}}>Don't have an account? Sign up</p>
                </div>
            </div>
           
        </div>
        <Footer/>
        </>

    )
}

export default Signin;