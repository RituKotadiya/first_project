import "./Signup.css"

function Signup() {

    return (
        <div className="new1">
            <div className="new">
                <div className="signup">
                    <label><b>Sign Up</b></label>
                </div>
                <div className="new2">
                    <div className="first">
                        <label><b>First name</b></label>
                        <input placeHolder="  First name" className="ni"></input>
                    </div>
                    <div className="last">
                        <label><b>Last name</b></label>
                        <input placeHolder="  Last name" className="ni"></input>
                    </div>
                    <div className="address">
                        <label><b>Email address</b></label>
                        <input placeHolder="  Enter email" className="ni"></input>
                    </div>
                    <div className="pass">
                        <label><b>Password</b></label>
                        <input placeHolder="  Enter password" className="ni" type="password"></input>
                    </div>
                    <div className="btn">
                        <button><b>Sign Up</b></button>
                    </div>
                </div>
                <div className="signin">
                    <label >Already registered <a href="#">sign in?</a></label>
                </div>


            </div>
        </div>



    )
}
export default Signup;