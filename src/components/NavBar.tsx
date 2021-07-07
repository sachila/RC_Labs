import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { CartModal } from "../Pages/CartModal";
import { useStateSelectors } from "../store/selector";
import { CartBatch } from "../styles/NavBarElements";

export const NavbarComponent: React.FC = () => {
  const { cartItems } = useStateSelectors();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Root Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Cart className="mr-sm-2" onClick={handleShow} />
            <CartBatch variant="secondary">{cartItems.length}</CartBatch>
          </li>
        </ul>
      </Navbar>
      <CartModal open={show} onClose={handleClose} />
    </>
  );
};
