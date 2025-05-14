import { useNavigate } from "react-router-dom";
import "./Header.css"
import image1 from "../Homepage/image.png";
import { useState, useEffect } from "react";




function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("login"));
        if (userData !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

    }, []);


    const handleSigninClick = () => {
        navigate("/Signin");
    }

    const handleSignupClick = () => {
        navigate("/Signup");
    }

    const handleLogout = () => {
        sessionStorage.removeItem("login");
        setIsLoggedIn(false);
        navigate("/Signin");
    };


    sessionStorage.setItem("loggedInUser", JSON.stringify({ token: "your_token_here" }));


    return (
        <nav>

            <div className="n1">
                <img src={image1} className="image"></img>

                <ul className="li">
                    <a href="#"><li><b>Product</b></li></a>
                    <a href="#"><li><b>For teoms</b></li></a>
                    <a href="#"><li><b>Support</b></li></a>
                  {
                    isLoggedIn ?  <a href="#"><li><b>My Profile</b></li></a> : null
                  } 
                </ul>
                <div className="b">
                    {
                        isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <>
                            <button onClick={handleSigninClick}>Signin</button>
                            <button onClick={handleSignupClick}>Signup</button>
                        </>
                    }


                </div>
                {isLoggedIn}
            </div>

        </nav >

    )
}
export default Header;