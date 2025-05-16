import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function Myprofile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
    // Load data from 'register' on mount
      useEffect(() => {
        const loginData = JSON.parse(sessionStorage.getItem("register"));
        if (loginData && loginData.length > 0) {
            const user = loginData[0];
            setFirstName(user.firstName || "");
            setLastName(user.lastName || "");
            setEmail(user.email || "");
        }
    }, []);

    //     // Auto-save profile draft to sessionStorage
    // useEffect(() => {
    //     const updatedUser = {
    //         firstName,
    //         lastName,
    //         email
    //     };
    //     sessionStorage.setItem("draftProfile", JSON.stringify(updatedUser));
    // }, [firstName, lastName, email]);



    const handleSave = () => {

        console.log("FirstName = " + firstName);
        console.log("LastName = " + lastName);
        console.log("Email = " + email);

        if (!firstName || !lastName || !email) {
            setError("All fields are required.");
            return;
        }
        const storedData = JSON.parse(sessionStorage.getItem("register")) || []; //session store code 
     

         // Update the user using map()
    const updatedUsers = storedData.map(user => {
        if (user.email === email) {
            // Update the user's info
            return {
                ...user,
                firstName,      //...first data in upadate to new data
                lastName,
                email
            };
        }
        return user;
    });

    // Save updated array back to sessionStorage
    sessionStorage.setItem("register", JSON.stringify(updatedUsers));

    
    setError("");
    alert("Profile updated successfully!");
    navigate("/Myprofile");
};

    

    return (
        <>
            <Header />
            <div className="">

                <div className="MyProfile">
                    <label onClick={handleSave}><b>My Profile</b></label>
                </div>

                <div className="fname">
                    <label><b>First Name </b></label>
                    <input className="fn" placeHolder="  Enter your First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className="lname">
                    <label><b>Last Name </b></label>
                    <input className="fn" placeHolder="  Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} ></input>
                </div>
                <div className="email">
                    <label><b>Email</b> </label>
                    <input className="fn" placeHolder="  Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                </div>
                <div className="save">
                    <button onClick={handleSave}>Save</button>
                </div>
                <div className="validation">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p onClick={() => navigate('/Myprofile')} style={{ cursor: 'pointer' }}></p>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Myprofile;