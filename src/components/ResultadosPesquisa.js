import React from 'react';
import '../App.css';
import {Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import NoticiaItemImgDireita from './NoticiaItemImgDireita';


export default class ResultadoPesquisa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
        }
    }

      componentDidMount() {        
        axios.get('https://saurav.tech/NewsAPI/everything/cnn.json')
          .then(
            response => {
              const {articles} = response.data;
              this.setState({
                noticias: articles
              })
            }
          )     
        }

    render() {
        const filtro = this.props.pesquisa.location.state.searchText
        var noticiasFiltradas = []
    
        this.state.noticias.map(noticias => {
            
            if ( (noticias.title.search(filtro)) !== -1) {
                noticiasFiltradas.push(noticias)
            }
        })

        return (
            <Container>
              <Row>
                <Col>
                  {noticiasFiltradas.map(noticias => (
                      <NoticiaItemImgDireita noticias={noticias} />
                  ))}
                  </Col>
                </Row>
            </Container>
        )
    }
}