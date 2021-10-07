import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

const MyFooter = () => {
  return (
    <footer className="footer">
    <Navbar sticky="bottom" bg="danger" variant="dark" text="light">
      <p style={{ color: "white" }}>Thank you for visiting</p>
    </Navbar>
    </footer>
  );
};

export default MyFooter;
