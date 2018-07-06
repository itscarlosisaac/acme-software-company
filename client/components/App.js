import React, { Component } from 'react'

// Importing components
import Header from './Header';
import Footer from './Footer';
import ImageCardList from './ImageCardList';
import LightBox from './Lightbox';
import EventEmitter from '../events/emitter'

export default class App extends Component {

  state = {
    loadedGif:[],
    count: 0,
    offset: 0,
    showLightBox: false,
    currentLightBoxImage: {},
    hasSearch: false
  }

  componentWillMount = () => {
    EventEmitter.on('LoadGifs', (data) => {
      let upcomingData = [ ...data ]
      let upcomingSearch = data.length > 1;
      this.setState({ 
        loadedGif: upcomingData,
        count: upcomingData.length,
        hasSearch: upcomingSearch
       })
    })
  }

  handleNext = () => {
    let currentIndex = this.state.loadedGif.indexOf(this.state.currentLightBoxImage);
    let nextImage = this.state.loadedGif[currentIndex + 1];
    if( nextImage !== undefined){
      this.setState({ currentLightBoxImage: nextImage })
    }
  }

  handlePrev = () => {
    let currentIndex = this.state.loadedGif.indexOf(this.state.currentLightBoxImage);
    let prevImage = this.state.loadedGif[currentIndex - 1];
    if( prevImage !== undefined){
      this.setState({ currentLightBoxImage: prevImage })
    }
  }

  handleThumbClick = (id) => {
    let curr = this.state.loadedGif.filter( (item) => item.id === id )
    this.setState({ 
      showLightBox: true,
      currentLightBoxImage: curr[0]
    })
  }

  closeLightBox = () => {
    this.setState({ showLightBox: false })
  }

  render() {
    return (
      <div className="app__container">
        <Header shrinked={this.state.hasSearch} />

        <ImageCardList 
          handleThumbClick={this.handleThumbClick}
          cards={this.state.loadedGif} />

        {
          this.state.showLightBox ? 
          <LightBox 
            close={this.closeLightBox}
            image={this.state.currentLightBoxImage} 
            prev={this.handlePrev}
            next={this.handleNext}  /> : ''
        }

        <Footer />
      </div>
    )
  }
}
