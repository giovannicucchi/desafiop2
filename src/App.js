import React from 'react';
import './App.css';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import NoticiaList from '../src/components/NoticiaList';
import PoliticaList from '../src/components/PoliticaList';
import NoticiaDetail from '../src/components/NoticiaDetail';

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
      noticias: []
    }
  }

  componentDidMount() {

       axios.get('https://api.breakingapi.com/news?q=climate&type=everything&locale=pt-BR&api_key=CEDF56A8A5194303B2F4E6C22EA361F7')
          .then(
            response => {
              const {articles} = response.data;
              
              this.setState({
                noticias: articles
              })

            }
          )


    // axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=d04084406a0a4556b588a7692e20b048')
    //   .then(
    //     response => {
    //       const {articles} = response.data;
          
    //       this.setState({
    //         noticias: articles
    //       })

    //     }
    //   )
  } 
  
  render(){
      return(
        
        <Router>
          <Switch>
          <Route path="/:id" render={(props) => <NoticiaDetail {...props}/> } />
            <Route path="/">
              <div>
                <Navbar />

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