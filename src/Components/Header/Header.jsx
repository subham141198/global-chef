import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Provider/AuthProvider";


function ChefNavbar() {
  const { user } = useUserAuth();
  const { LogOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = () =>{
    LogOut().then(() => {
        navigate("/");
        console.log("Signed out successfully")
      }).catch((error) => {
        console.log(error)
      });
};

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          {user ? (
            <Link className="btn btn-primary" to="/login" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary ms-1" to="/register">
                Register
              </Link>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default ChefNavbar;
