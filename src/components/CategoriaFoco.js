import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Navbar'
import PoliticaList from './PoliticaList';


export default class CategoriaFoco extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          noticias: []
        }
      }

      componentDidMount() {
        console.log(this.props)
        this.setState({
            noticias: this.props.noticias
        })
    }

    render (){
        return (
            <div className='noticia-detail'>
                <NavBar/>
                
                <Container> 
                    <h1>{this.props.categoria}</h1>
                    <PoliticaList noticias={this.state.noticias} />
                </Container>
            </div>
        )
    }
}