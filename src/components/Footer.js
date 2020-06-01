import React from 'react';
import '../App.css';
import {Row, Col } from 'react-bootstrap';


class Footer extends React.Component {
    render(){
        return(
            <Row className='footer'>
                <Col>
                    <h1>DESAFIO P2</h1>
                    <Row className='footer-row'>
                        <Col>
                            <p>Política</p>
                        </Col>
                        <Col>
                            <p>Esportes</p>
                        </Col>
                        <Col>
                            <p>Segurança</p>
                        </Col>
                        <Col>
                            <p>Lazer</p>
                        </Col>
                        <Col>
                            <p>Lapa Acontece</p>
                        </Col>
                    </Row>
                    <p>© CopyRight 2020 - Estação da Lapa</p>
                    <p><b>Todos os Direitos Reservados</b></p>
                </Col>
            </Row>
        )
    }

}


export default Footer;