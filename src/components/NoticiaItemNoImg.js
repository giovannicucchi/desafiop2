import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  
const NoticiaItemNoImg = props => {
    const {noticias} = props;

    return (
        <div className='noticia-menor'>
            <Row>
               <Col xs='12'>
                    <p className='categoria'>Categoria</p>
                    <Link to={ { pathname: `/${noticias.title}`, state: { noticias } } } className='titulo-noticia-menor'>{noticias.title}</Link>
                    <p>{noticias.publishedAt}</p>
                </Col>
            </Row>
        </div>
    )
}

export default NoticiaItemNoImg;