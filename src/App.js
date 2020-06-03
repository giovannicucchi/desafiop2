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
import Home from '../src/components/Home';

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
        
        <Router >
          <Navbar noticias={this.state.noticias} />
          <Switch >
            <Route path="/ultimas-noticias" render={(props) => <CategoriaFoco categoria='general'/> } />
            <Route path="/esportes" render={(props) => <CategoriaFoco categoria='sports' /> } />
            <Route path="/ciencias" render={(props) => <CategoriaFoco categoria='science' /> } />
            <Route path="/lazer" render={(props) => <CategoriaFoco categoria='entertainment' /> } />
            <Route path="/mais-lidas" render={(props) => <CategoriaFoco categoria='general' /> }/>
            <Route path="/aqui-acontece" render={(props) => <CategoriaFoco categoria='general' /> } />
            <Route path="/results/" render={(props) => <ResultadosPesquisa pesquisa={props} />} />
            <Route path="/:id" render={(props) => <NoticiaDetail {...props}/> } />
            <Route path="/" render={(props) => <Home {...props} noticias={this.state.noticias} /> } />  
          </Switch>
          <Footer />
        </Router>
      
        );
    }
}