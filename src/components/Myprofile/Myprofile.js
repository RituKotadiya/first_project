import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Myprofile.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Myprofile() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
     const [error, setError] = useState("");

    const handleSave = () => {

        console.log("FirstName = " + firstName);

        console.log("LastName = " + lastName);

        console.log("Email =" + email);

        //not a null value
         if (firstName === "" || lastName === "" || email === "") {
            setError("Please fill out all fields");
            return;
        }


    }
    return (
        <div className="">

            <div className="MyProfile">
                <label><b>My Profile</b></label>
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
        </div>


    )
}
export default Myprofile;