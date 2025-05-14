import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = () => {

        console.log("FirstName = " + firstName);

        console.log("LastName = " + lastName);

        console.log("Email =" + email);

        console.log("Password = " + password);



        //  not a null value 
        if (firstName === "" || lastName === "" || email === "" || password === "") {
            setError("Please fill out all fields");
            return;
        }


        // Session sotrage code
        let data = JSON.parse(sessionStorage.getItem("items"));

        if (data == null) {
            data = []
        }

        data.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });

        sessionStorage.setItem("register", JSON.stringify(data));

        let metachData = data.filter((e) => e.firstName === firstName && e.lastName === lastName && e.email === email && e.password === password);

        if (metachData.length > 0) {
            let data = [];
            data.push({

                email: email,
                password: password
            });

            sessionStorage.setItem("login", JSON.stringify(data));

            // succesfukk
            console.log("Successfully data");
            navigate("/");
        } else {
            //invalid
            setError("Pleae enter value");
        }

        const handleSignup = (e) => {
            e.preventDefault();

            if (!email || !password) {
                alert("All fields are required");
                return;
            }

            // Simulate signup
            const userData = { token: "sample_token", email };
            sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
            navigate("/dashboard"); // or home
        };


    }

    return (
        <>
            <Header />
            <div className="new1">
                <div className="new">
                    <div className="signup">
                        <label><b>Sign Up</b></label>
                    </div>
                    <div className="new2">
                        <div className="first">
                            <label><b>First name</b></label>
                            <input placeholder="  First name" className="ni" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        </div>
                        <div className="last">
                            <label><b>Last name</b></label>
                            <input placeholder="  Last name" className="ni" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <div className="address">
                            <label><b>Email address</b></label>
                            <input placeholder="  Enter email" className="ni" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="pass">
                            <label><b>Password</b></label>
                            <input placeholder="  Enter password" className="ni" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="btn">
                            <button onClick={handleSignUp}><b>Sign Up</b></button>
                        </div>
                    </div>
                    {/* <div className="signin">
                        <label >Already registered <a href="#">sign in?</a></label>
                    </div> */}

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p onClick={() => navigate('/Signin')} style={{ cursor: 'pointer' }}>Already have an account? Login</p>
                </div>

            </div>
            <Footer />
        </>

    )
}
export default Signup;