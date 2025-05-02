import "./Signin.css"

function Signin() {

    
    return (

        <div className="main1">
        <div className="main">
                <div className="login">
                    <label><b>Sign In</b></label>
                </div>
                <div className="box">
                <div className="emailaddress">
                    <label><b>Email address</b></label> <br/> 
                    <input className="in" placeHolder="  Enter your email" ></input>
                   
                </div>
                <div className="password">
                    <label><b>Password</b></label><br/>
                    <input className="in" placeHolder="  Enter your password" type="password"></input>
                </div>
                <div className="checkbox">
                    <input type="checkbox"></input>
                    <label>Remember me</label>
                </div>
                </div>
            <div className="butt">   
               <button><b>Submit</b></button>
               <button><b>Clear</b></button>
            </div>

            <div className="forgot">
                <label>Forgot <a href="#">password ?</a></label>
            </div>
           
        </div>
        </div>


    )
}

export default Signin;