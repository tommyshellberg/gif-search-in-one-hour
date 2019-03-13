import React, { Component } from 'react';
import './App.css';
import GifCard from './components/gifCard'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import Input from './components/Input'

class App extends Component {

  state = {
    gifs: []
  }

  apiKey = '0Yi0DokZi0a2Ts7ycbWw8ho5dOp9FI3V'
  urlPath = 'https://api.giphy.com/v1/gifs/search'

  handleSubmit = ( value ) => {
    console.log(value)
  }

  giphySearch = (query) => {
    fetch( `${this.urlPath}?api_key=${this.apiKey}&q=${query}` )
    .then( response => response.json())
    .then( data => {this.setState({gifs: data.data})})
  } 

    


  render() {
    return (
      <div>
        <Header />
        <Input handleSubmit={this.handleSubmit} giphySearch={this.giphySearch}/>
        { this.state.gifs.map( gif => {
          const url = gif.images.fixed_height.url
          return <GifCard src={url}/>
        }) }
      </div>
    )
  }
}

export default App;
