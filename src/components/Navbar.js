import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Form, FormControl, Col, Button } from 'react-bootstrap';

export default class NavBar extends React.Component {
    state ={
        searchText: ''
    };

    handleRoute = route => () => {
        this.props.history.push({ pathname: route });
      };
    
      handleSearchInput = event => {
        this.setState({
          searchText: event.target.value
        });
        console.log(this.state.searchText)
      };
    
     
      

    render(){
      
        return(
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Col className='navbar-title'>
                <Navbar.Brand href="/">Desafio P2</Navbar.Brand>
                </Col>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                   
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <Link to='/ultimas-noticias' categoria='general' className='dropdown-item'> Últimas Notícias </Link>
                        <Link to='/esportes' categoria='sports' className='dropdown-item'> Esportes </Link>
                        <Link to='/negocios' categoria='business' className='dropdown-item'> Negócios </Link>
                        <Link to='/lazer' categoria='entertainment' className='dropdown-item'> Lazer </Link>
                      
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Desafio P2</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Link to='/ultimas-noticias' categoria='general' className='nav-link'> Últimas Notícias </Link>
                    <Link to='/ultimas-noticias' categoria='general' className='nav-link'> Mais Lidas </Link>
                    </Nav>
                    
                    <Form inline>
                    <FormControl onChange={this.handleSearchInput}
                        value={this.state.searchText}
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2" />
                    <Link to={{ 
                        pathname: `results/${this.state.searchText}`,
                        state: {
                            searchText: this.state.searchText
                          }

                     }} pesquisa={this.value} > PESQUISAR </Link>
                    </Form>
                
                </Navbar.Collapse>
            </Navbar>
        )
}
}