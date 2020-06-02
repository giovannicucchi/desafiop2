import React from 'react';
import '../App.css';
import {Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import NoticiaItemImgDireita from './NoticiaItemImgDireita';


export default class ResultadoPesquisa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noticias: [],
        }
    }

      componentDidMount() {
        
        // console.log('filtro: ', filtro)
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

    render() {
        const filtro = this.props.pesquisa.location.state.searchText
        var noticiasFiltradas = []
    
        this.state.noticias.map(noticias => {
            
            console.log(noticias.title.search(filtro))
            if ( (noticias.title.search(filtro)) !== -1) {
                noticiasFiltradas.push(noticias)
            }
            console.log(noticiasFiltradas)
        })
        return (
            <div>
                {noticiasFiltradas.map(noticias => (
                    <NoticiaItemImgDireita noticias={noticias} />
                ))}
            </div>
        )
    }
}