import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoticiaItemImgDireita from '../components/NoticiaItemImgDireita';
import NoticiaItemDestaque from '../components/NoticiaItemDestaque';


const MaisUltimas = props => {
    const { noticias } = props;

    return(
        <div>
            <Row>
                <Col>
                    {noticias.slice(0, 4).map((noticias, index) => (
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

export default MaisUltimas