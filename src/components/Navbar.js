import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Form, FormControl, Col } from 'react-bootstrap';

const NavBar = props => {
    const {noticias} = props;

        return(
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Col className='navbar-title'>
                <Navbar.Brand href="/">Desafio P2</Navbar.Brand>
                </Col>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                   
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <Link to={ { pathname:'/ultimas-noticias', state: { noticias } } } className='dropdown-item'> Últimas Notícias </Link>
                        <Link to={ { pathname:'/esportes', state: { noticias } } } className='dropdown-item'> Esportes </Link>
                        <Link to={ { pathname:'/seguranca', state: { noticias } } } className='dropdown-item'> Segurança </Link>
                        <Link to={ { pathname:'/lazer', state: { noticias } } } className='dropdown-item'> Lazer </Link>
                      
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Desafio P2</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Link to={ { pathname:'/ultimas-noticias', state: { noticias } } } className='nav-link'> Últimas Notícias </Link>
                    <Link to={ { pathname:'/mais-lidas', state: { noticias } } } className='nav-link'> Mais Lidas </Link>
                    <Link to={ { pathname:'/ultimas-noticias', state: { noticias } } } className='nav-link'> Últimas Notícias </Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="O que você procura?" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
}

export default NavBar;