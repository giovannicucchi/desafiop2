import React from 'react';
import '../App.css';

import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class NavBar extends React.Component {
    render(){
        return(
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">Desafio P2</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                   
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Últimas Notícias</Nav.Link>
                    <Nav.Link href="#link">Mais Lidas</Nav.Link>
                    <Nav.Link href="#link">Aqui Acontece</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="O que você procura?" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;