import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoticiaItemImgDireita from '../components/NoticiaItemImgDireita';
import NoticiaItemDestaque from '../components/NoticiaItemDestaque';

const NoticiaList = props => {
    const { noticias } = props;

    return(
        <div>
            <Row>
                <Col xs='12' lg='6' xl='6'>
                    {noticias.slice(0, 1).map((noticias, index) => (
                        <div>
                            <NoticiaItemDestaque noticias={noticias} index={index}/>
                        </div>
                        )
                    )}
                </Col>
                <Col xs='12' lg='6' xl='6'>
                    {noticias.slice(1, 4).map((noticias, index) => (
                        <div>
                            <NoticiaItemImgDireita noticias={noticias} index={index}/>
                        </div>
                        )
                    )}
                </Col>
             </Row>
        </div>
    )
}

export default NoticiaList