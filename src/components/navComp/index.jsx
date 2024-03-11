import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiShoppingCart } from "react-icons/ci";
import { ItemContext } from '../../_context/ItemProvider';
import Modal_Show from "../modalComp";

function TopNavBar() {
    const { itemCounts,  items,  itemsArray,} = useContext(ItemContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="navcontainer">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Features</Nav.Link>
                            <Nav.Link>Pricing</Nav.Link>
                        </div>
                        <div className="navcartcontainer">
                            <div className="cartsection">
                                <div>
                                    {itemCounts}
                                </div>
                                <div>
                                    <Nav.Link onClick={handleShow}><CiShoppingCart size={25} /></Nav.Link>
                                </div>
                            </div>

                        </div>
                    </Nav>
                </Container>
            </Navbar>
            <Modal_Show show={show} handleClose={handleClose} items={items} itemArray = {itemsArray} />
        </>
    );
}

export default TopNavBar;
