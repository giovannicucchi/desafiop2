import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
  
const NoticiaItemImgEsquerda = props => {
    const {noticias} = props;

    return (
        <div className='noticia-menor'>
            <Row>
                <Col xs='5'>
                    <img className='img-noticia-thumb' src="https://picsum.photos/760/400" alt=''></img>
                </Col>
               <Col xs='7'>
                    <p className='categoria'>Categoria</p>
                    <Link to={ { pathname: `/${noticias.title}`, state: { noticias } } } className='titulo-noticia-menor'>{noticias.title}</Link>
                    <p>{noticias.publishedAt}</p>
                </Col>
            </Row>
        </div>
    )
}

export default NoticiaItemImgEsquerda;