import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NoticiaItemDestaque = props => {
    const {noticias} = props;
    
    return (
        <div className='noticia-destaque'>
            <Row>
                <Col>
                    <img className='img-noticia-thumb' src={noticias.urlToImage} alt=''></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='categoria'>Categoria</p>
                    <Link to={ { pathname: `${noticias.title}`, state: { noticias } } } className='titulo-noticia-destaque'>
                         <h1>{noticias.title}</h1>
                    </Link>
                    <p>{noticias.publishedAt}</p>
                </Col>
            </Row>                    
        </div>
    )
}

export default NoticiaItemDestaque;