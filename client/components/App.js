import React, { Component } from 'react'

// Importing components
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {

  state = {
    loadedGif:[],
    count: 0,
    offset: 0
  }

  render() {
    return (
      <div className="app__container">
        <Header />
        <Footer />
      </div>
    )
  }
}
