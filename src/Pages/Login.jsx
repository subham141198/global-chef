import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ChefNavbar from "../Components/Header/Header";
import { Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import {Alert } from "react-bootstrap"
import { useUserAuth } from "../Provider/AuthProvider";


function LoginForm() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const { Login } = useUserAuth();
    const navigate = useNavigate()
    const  handleLogin = async(e) =>{
        e.preventDefault();
        seterror("")
        try{
        await Login(email,password)
        navigate("/")
        }
        catch(err){
          seterror(err.message)
        }
    };
  return (
    <>  <ChefNavbar/>
        <div className="container container-width">
        <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="col-12 formContainer">

          <h1 className="text-center">Login Here</h1>
          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" onChange={ (e)=> {setemail(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={ (e)=> {setpassword(e.target.value)}}/>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Login
            </Button>
          </Form>

          <span className="text-center">Dont Have an Account </span>
          <Link to="/register">Create here</Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default LoginForm;
