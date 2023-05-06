import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ChefNavbar from "../Components/Header/Header";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import { Alert } from "react-bootstrap"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'



function PhoneLoginForm() {

    const [phoneNo, setphoneNo] = useState("")
    const [error, seterror] = useState("")
    const [otp, setotp] = useState("")
    const [showOtpForm, setshowOtpForm] = useState(false)
    const [confirmObj, setconfirmObj] = useState("")
    const { setreCaptcha } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    console.log(showOtpForm)
    


    async function getOtp(e) {
        e.preventDefault();
        seterror("")
        if (phoneNo === "" || phoneNo === undefined) {
            return seterror("Please provide a phone number")
        }
        try {
            const response = await setreCaptcha("+"+phoneNo)
            console.log(response)
            setconfirmObj(response)
            setshowOtpForm(true)
        } catch (err) {
            seterror(err.message)
        }
    }


   async function varifyOtp(e){
        e.preventDefault();
        if(otp === "" || otp === undefined) return seterror("Please provide your OTP")
            try{
                await confirmObj.confirm(otp)
                navigate(from, { replace: true })
            }catch (err) {
                seterror(err.message)
            }
    }

    return (
        <>  <ChefNavbar />

            <div className="container container-width">
                <div className="row min-vh-100 justify-content-center align-items-center">
                    <div className="col-12 formContainer">

                        <h1 className="text-center">Login Here with Phone Number</h1>
                        {error && <Alert className="alert-danger" varient="danger">{error}</Alert>}
                        <Form onSubmit={getOtp} style={{display: !showOtpForm ? "block" : "none"}}>
                            <Form.Group className="mb-3">
                            <PhoneInput 
                                    inputProps={{
                                        required: true
                                      }}
                                    country="in"
                                    placeholder="Enter phone number"
                                    value={phoneNo}
                                    onChange={setphoneNo}
                                    inputClass="w-100"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div id="recaptcha-container" />
                            </Form.Group>

                            <Button className="w-100" variant="primary" type="submit">
                                Send OTP
                            </Button>
                        </Form>

                        <Form onSubmit={varifyOtp} style={{display: showOtpForm ? "block" : "none"}}>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Enter the OTP" onChange={(e) => { setotp(e.target.value) }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <div id="recaptcha-container" />
                            </Form.Group>

                            <Button className="w-100" variant="primary" type="submit">
                                Verify
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