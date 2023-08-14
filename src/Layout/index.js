import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import Search from './Search'

function Layout() {

    return (
        <div className="layout">
            <Navbar bg="dark" variant="dark" className="mb-5 w-300" sticky="top" expand="lg">
                <Container>
                    <a href="/" className="navbar-brand">
                        AN COFFE
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                            <Link to="/shop" className="nav-link">
                                Shop
                            </Link>
                            <Link to="/service" className="nav-link">
                                Services
                            </Link>
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                            <Link to="/manager" className="nav-link">
                                Manager
                            </Link>
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                            <Search />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}
export default Layout;
