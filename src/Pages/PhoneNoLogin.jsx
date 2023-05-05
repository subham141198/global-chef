import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ChefNavbar from "../Components/Header/Header";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import { Alert } from "react-bootstrap"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config"


function PhoneLoginForm() {
    const [name, setname] = useState("")
    const [phoneNo, setphoneNo] = useState(0)
    const [otp, setotp] = useState(0)
    const [error, seterror] = useState("")
    const [message, setmessage] = useState("")
    const { phoneNoSignIn } = useContext(AuthContext);
    const location = useLocation();



    // const from = location.state?.from?.pathname || "/"
    // const navigate = useNavigate()

if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': "invisible",
        'callback': (response) => {
          onSignInSubmit();
        }
      }, auth);
    }


    function onSignInSubmit() {
        const appVerifier = window.recaptchaVerifier;

        phoneNoSignIn(phoneNo, appVerifier)
            .then(result => {
                setmessage(result)
            })
            .catch(error => {
                seterror(error.message)
            })
    }




    return (
        <>  <ChefNavbar />

            <div className="container container-width">
                <div className="row min-vh-100 justify-content-center align-items-center">
                    <div className="col-12 formContainer">

                        <h1 className="text-center">Login Here with Phone Number</h1>

                        <div id="recaptcha-container"></div>
                        {error && <Alert className="alert-danger" varient="danger">{error}</Alert>}
                        {message && <Alert className="alert-success" varient="success">{message}</Alert>}
                        <Form onSubmit={onSignInSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Enter your Name" onChange={(e) => { setname(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="tel" placeholder="Enter Phone Number" onChange={(e) => { setphoneNo(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Enter your OTP" onChange={(e) => { setotp(e.target.value) }} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="UserImageLink" onChange={(e) => { setimage(e.target.value) }} />
                            </Form.Group> */}

                            <div className="row">

                            </div>
                            <Button className="w-100" variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <span className="text-center"> Dont Have an Account? </span>
                        <Link to="/register">Create here</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhoneLoginForm;