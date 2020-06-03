import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Navbar'
import PoliticaList from './PoliticaList';
import axios from 'axios';


export default class CategoriaFoco extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          noticias: [],
          categoria: ''
        }
      }

      atualizar() {
        axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${this.props.categoria}/us.json`)
        .then(
          response => {
            const {articles} = response.data;
            
            this.setState({
              noticias: articles,
              categoria: this.props.categoria
            })
          }
        )
     } 

      componentDidMount() {
        this.atualizar()
    } 
   
    componentDidUpdate(prevProps) {
        if (this.props.categoria !== prevProps.categoria) {
          this.atualizar();
        }
       }

    render (){      
    
        return (
            
            <div className='noticia-detail'>                
                <Container> 
                    <h1>{this.props.categoria.toUpperCase()}</h1>
                    <PoliticaList noticias={this.state.noticias} />
                </Container>
            </div>
        )
    }
}
