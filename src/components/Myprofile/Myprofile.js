import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Myprofile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSave = () => {

        console.log("FirstName = " + firstName);
        console.log("LastName = " + lastName);
        console.log("Email = " + email);

        if (!firstName || !lastName || !email) {
            setError("All fields are required.");
            return;
        }
        const storedData = JSON.parse(sessionStorage.getItem("Myprofile")) || [];
        const matchedUser = storedData.find(
            (user) =>
                firstName === firstName,
                lastName === lastName,
               email === email
        );
         if (matchedUser) {
            sessionStorage.setItem("login", JSON.stringify([matchedUser]));
            console.log("Login successful");
            navigate("/Myprofile"); 
        } else {
            setError("User not found. Please check your details or sign up.");
        }



    }

    return (
        <>
            <Header />
            <div className="">

                <div className="MyProfile">
                    <label onClick={handleSave}><b>My Profile</b></label>
                </div>

                <div className="fname">
                    <label><b>First Name </b></label>
                    <input className="fn" placeHolder="  Enter your First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className="lname">
                    <label><b>Last Name </b></label>
                    <input className="fn" placeHolder="  Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className="email">
                    <label><b>Email</b> </label>
                    <input className="fn" placeHolder="  Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
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