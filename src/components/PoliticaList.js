import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoticiaItemImgDireita from '../components/NoticiaItemImgDireita';
import NoticiaItemDestaque from '../components/NoticiaItemDestaque';
import NoticiaItemImgEsquerda from './NoticiaItemImgEsquerda';
import NoticiaItemNoImg from './NoticiaItemNoImg';


const PoliticaList = props => {
    const { noticias } = props;

    return(
        <div>
            <Row>
                <Col xs='12' lg='6' className='outras-noticias'>
                    {noticias.slice(4, 5).map((noticias, index) => (
                        <div className='noticias-outros-destaques'>
                            <NoticiaItemDestaque noticias={noticias} index={index}/>
                        </div>
                        ))}
                </Col>
                <Col xs='12' lg='6'>
                    {noticias.slice(5, 6).map((noticias, index) => (
                        <div className='noticias-outros-destaques2'>
                            <NoticiaItemImgDireita noticias={noticias} index={index}/>
                        </div>
                        ))}
                    {noticias.slice(6, 7).map((noticias, index) => (
                        <div className='noticias-outros-destaques2'>
                            <NoticiaItemNoImg noticias={noticias} index={index}/>
                        </div>
                        ))}
                </Col>
             </Row>
             <Row>
                 {noticias.slice(7, 9).map((noticias, index) => (
                     <Col xs='12' lg='6'>
                        <div className='noticias-outros-destaques2'>
                            <NoticiaItemNoImg noticias={noticias} index={index}/>
                        </div>
                     </Col>
                    ))}
            </Row>
        </div>
    )
}

export default PoliticaList