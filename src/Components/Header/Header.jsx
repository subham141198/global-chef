import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


function ChefNavbar() {
  const { user } = useContext(AuthContext);
  const { LogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    LogOut().then(() => {
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Global Chef Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
            <Nav className="mr-auto"></Nav>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Nav className="mr-auto"></Nav>
            <Nav>
              {
                user ? <><NavDropdown title={<img className="rounded-circle"src={user.photoURL} alt="Profile" width={35} />} id="collasible-nav-dropdown">
                  <NavDropdown.Item>{user.email}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
                </NavDropdown></>
                  : <><Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link></>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ChefNavbar;
