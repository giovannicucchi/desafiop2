import React from 'react';
import './App.css';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import NoticiaList from '../src/components/NoticiaList';
import PoliticaList from '../src/components/PoliticaList';
import NoticiaDetail from '../src/components/NoticiaDetail';
import CategoriaFoco from '../src/components/CategoriaFoco';
import ResultadosPesquisa from '../src/components/ResultadosPesquisa';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import MaisUltimas from './components/MaisUltimasList';

export default class DesafioP2Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      noticias: [],
      searchText: ''
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
  
  render(){
      return(
        
        <Router>
          <Switch>
          <Route path="/ultimas-noticias" render={(props) => <CategoriaFoco categoria='general'/> } />
          <Route path="/esportes" render={(props) => <CategoriaFoco categoria='sports' /> } />
          <Route path="/negocios" render={(props) => <CategoriaFoco categoria='business' /> } />
          <Route path="/lazer" render={(props) => <CategoriaFoco categoria='entertainment' /> } />
          <Route path="/mais-lidas" render={(props) => <CategoriaFoco categoria='general' /> }/>
          <Route path="/aqui-acontece" render={(props) => <CategoriaFoco categoria='general' /> } />

          <Route path="/results/" render={(props) => <ResultadosPesquisa pesquisa={props} />} />

          <Route path="/:id" render={(props) => <NoticiaDetail {...props}/> } />
            <Route path="/">
              <div>
                <Navbar noticias={this.state.noticias}/>

                <Container> 
                  
                  <NoticiaList noticias={this.state.noticias} />
                </Container>

                <Container>
                  <Row>
                    <Col xs='12' lg='8'>
                      <h2>Aqui Acontece</h2>
                      <PoliticaList noticias={this.state.noticias} />
                      <Row>
                        <div style={{backgroundImage: `url("https://picsum.photos/760/400")` }} className='img-noticia'>
                          <p>publicidade</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className='desktop-only' lg='4'>
                      <h2>Ultimas Noticias</h2>
                      <MaisUltimas noticias={this.state.noticias} />
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col xs='12' lg='8'>
                      <h2>Politica</h2>
                      <PoliticaList noticias={this.state.noticias} />
                      <h2>Entretenimento</h2>
                      <PoliticaList noticias={this.state.noticias} />
                    </Col>
                    <Col className='desktop-only' lg='4'>
                        <div className='img-noticia mais-ultimas-publi' style={{backgroundImage: `url("https://picsum.photos/400/400")` }} >
                          <p>publicidade</p>
                        </div>
                      <h2>Mais Lidas</h2>
                      <MaisUltimas noticias={this.state.noticias} />
                    </Col>
                  </Row>
                </Container>
                {/* <BottomNavBar /> */}
                <Footer />
                
               </div>
            </Route>
          </Switch>
          
        </Router>
      
        );
    }
}