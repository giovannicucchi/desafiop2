import React from 'react';
import { Row, Col, Container, Navbar } from 'react-bootstrap';
import NoticiaList from './NoticiaList';
import PoliticaList from './PoliticaList';
import MaisUltimas from './MaisUltimasList';
import Footer from './Footer';


const Home = (props) => {
    return(
            <div>
                <Container> 
                  <NoticiaList noticias={props.noticias} />
                </Container>

                <Container>
                  <Row>
                    <Col xs='12' lg='8'>
                      <h2>Aqui Acontece</h2>
                      <PoliticaList noticias={props.noticias} />
                      <Row>
                        <div style={{backgroundImage: `url("https://picsum.photos/760/400")` }} className='img-noticia'>
                          <p>publicidade</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className='desktop-only' lg='4'>
                      <h2>Ultimas Noticias</h2>
                      <MaisUltimas noticias={props.noticias} />
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col xs='12' lg='8'>
                      <h2>Politica</h2>
                      <PoliticaList noticias={props.noticias} />
                      <h2>Entretenimento</h2>
                      <PoliticaList noticias={props.noticias} />
                    </Col>
                    <Col className='desktop-only' lg='4'>
                        <div className='img-noticia mais-ultimas-publi' style={{backgroundImage: `url("https://picsum.photos/400/400")` }} >
                          <p>publicidade</p>
                        </div>
                      <h2>Mais Lidas</h2>
                      <MaisUltimas noticias={props.noticias} />
                    </Col>
                  </Row>
                </Container>
                
            </div>
    )
}

export default Home;