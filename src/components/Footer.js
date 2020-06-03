import React from 'react';
import '../App.css';
import {Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = props => {
    const {noticias} = props;

        return(
            <Row className='footer'>
                <Col>
                    <h1>DESAFIO P2</h1>
                    <Row className='footer-row'>
                        <Col>
                            <Link to='/ciencias' className='footer-link'> Ciências </Link>
                        </Col>
                        <Col>
                            <Link to='/esportes' className='footer-link'> Esportes </Link>
                        </Col>
                        <Col>
                            <Link to='/lazer' className='footer-link'> Lazer </Link>
                        </Col>
                        <Col>
                            <Link to='/ultimas-noticias' className='footer-link'> Lapa Acontece </Link>
                        </Col>
                    </Row>
                    <p>© CopyRight 2020 - Estação da Lapa</p>
                    <p><b>Todos os Direitos Reservados</b></p>
                </Col>
            </Row>
        )
    }

export default Footer;