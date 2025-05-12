import { useNavigate } from "react-router-dom";
import "./Header.css"
import image1 from "../Homepage/image.png";

function Header() {

    const navigate = useNavigate();

    const handleSigninClick = () => {
        navigate("/Signin");
    }

    const handleSignupClick = () => {
        navigate("/Signup");
    }
    return (
        <nav>

            <div className="n1">
                <img src={image1} className="image"></img>

                <ul className="li">
                    <a href="#"><li><b>Product</b></li></a>
                    <a href="#"><li><b>For teoms</b></li></a>
                    <a href="#"><li><b>Support</b></li></a>
                </ul>
                <div className="b">
                    <button onClick={handleSigninClick}>Signin</button>
                    <button onClick={handleSignupClick}>Signup</button>
                </div>
            </div>

        </nav >

    )
}
export default Header;