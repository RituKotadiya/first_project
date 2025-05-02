import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {


    return (

        <footer className="foote">
            <div className="foot">
                <div className="company">
                    <h3>company</h3>
                    <ul>
                        <li >About Us</li>
                        <li>Contact Us</li>
                        <li>Reservation</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condtion</li>
                    </ul>
                </div>
                <div className="Contact">
                    <h3>Contact</h3>
                    <p>123 Street, New York, USA</p>
                    <p>+012 345 67890</p>
                    <p>info@example.com</p>
                    <div className="icon">
                     <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faLinkedinIn} />


                    </div>
                </div>
                <div className="Opening">
                    <h3>Opening</h3>
                    <p>Monday - Saturday: <br />09AM - 09PM</p>
                    <p>Sunday: <br />10AM - 08PM</p>

                </div>

                <div className="Newsletter">
                    <h3>Newsletter</h3>
                    <p>Dolor amet sit justo amet elitr clita <br />ipsum elitr est.</p>
                   
                </div>
            </div>
        </footer>
    )
}

export default Footer;