import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './Navbar';
import Footer from './Footer';

export default class NoticiaDetail extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          noticia: {}
        }
      }
      
    componentDidMount() {
        console.log(this.props.history.location.state.noticias.title)

        this.setState({
            noticia: this.props.history.location.state.noticias
        })
    }

    render (){
        return (
            <div className='noticia-detail'>
                <Container>
                    <Row>
                        <Col xs='12' lg='6'>
                            <img className='img-noticia-thumb' src={this.state.noticia.urlToImage} alt=''></img>
                        </Col>
                        <Col xs='12' lg='6'>
                            <h1>{this.state.noticia.title}</h1>
                            <h2>{this.state.noticia.description}</h2>
                            <p>{this.state.noticia.publishedAt}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                    <div className='noticia-detail'>
                        <p>{this.state.noticia.content}</p>
                        <p>obs: a notícia inteira tem que ter a versão paga da API :/</p>
                        
                        
                    </div>
                </Container>
            </div>
        )
    }
}