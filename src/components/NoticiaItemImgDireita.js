import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  
const NoticiaItemImgDireita = props => {
    const {noticias} = props;

    return (
        <div className='noticia-menor'>
            <Row>
               <Col xs='8'>
                    <p className='categoria'>Categoria</p>
                    <Link to={ { pathname: `${noticias.title}`, state: { noticias } } } className='titulo-noticia-menor'> {noticias.title} </Link>
                    <p>{noticias.publishedAt}</p>
                </Col>
                <Col xs='4'>
                    <div style={{backgroundImage: `url("${noticias.urlToImage}")` }} className='img-noticia'></div>
                </Col>
            </Row>
        </div>
    )
}

export default NoticiaItemImgDireita;