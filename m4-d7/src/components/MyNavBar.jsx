import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Navbar.Brand href="#">StriveBooks</Navbar.Brand>
      <Nav className="justify-content-sm-between ">
        <Link to="/">
        <span className="nav-link">Home</span>
        </Link>
        <Link to="/registration">
        <span className="nav-link">Register</span>
        </Link>
        <Link to="/">
        <span className="nav-link">Home</span>
        </Link>

      </Nav>
    </Navbar>
  );
};

export default MyNavBar;