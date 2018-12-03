import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

// Importing components
import Header from './Header';
import ImageCardList from './ImageCardList';
import LightBox from './Lightbox';
import LoadMoreButton from './LoadMoreButton'
import Footer from './Footer';
import EventEmitter from '../events/emitter'

// Importing Service
import GifServices from '../services/gifServices'

export default class App extends Component {

  state = {
    loadedGif:[],
    count: 0,
    offset: 0,
    showLightBox: false,
    currentLightBoxImage: {},
    hasSearch: false,
    searchValue: ''
  }

  componentWillMount = () => {
    EventEmitter.on('LoadGifs', (data, value) => {
      let upcomingData = [ ...data ]
      let upcomingSearch = data.length > 1;
      this.setState({
        loadedGif: upcomingData,
        count: upcomingData.length,
        hasSearch: upcomingSearch,
        searchValue: value,
        offset:20
       })
    })

    EventEmitter.on('LoadMoreGifs', ( data ) => {
      let upcomingData = [ ...this.state.loadedGif, ...data ]
      let count = upcomingData.length
      let offset = this.state.offset + 20
      this.setState({ 
        loadedGif: upcomingData,
        count,
        offset
       })
    })

    window.addEventListener('keyup', (evt) => {
      // console.log(evt)
      if( this.state.showLightBox){
        if( evt.keyCode == 39){
          this.handleNext();
        }else if(evt.keyCode == 37){
          this.handlePrev();
        }else if(evt.keyCode == 27){
          this.closeLightBox();
        }
      }
    })
  }

  handleNext = () => {
    let currentIndex = this.state.loadedGif.indexOf(this.state.currentLightBoxImage);
    let nextImage = this.state.loadedGif[currentIndex + 1];
    if( nextImage !== undefined){
      this.setState({ currentLightBoxImage: nextImage })
    }else{
      this.setState({ currentLightBoxImage: this.state.loadedGif[0] })
    }
  }

  handlePrev = () => {
    let currentIndex = this.state.loadedGif.indexOf(this.state.currentLightBoxImage);
    let prevImage = this.state.loadedGif[currentIndex - 1];
    if( prevImage !== undefined){
      this.setState({ currentLightBoxImage: prevImage })
    }else{
      this.setState({ currentLightBoxImage: this.state.loadedGif[ this.state.loadedGif.length - 1] })
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

  handleLoadMore = () => {
    const { searchValue, offset } = this.state
    GifServices.FecthData( searchValue, 20, offset, (data) => {
      EventEmitter.emit('LoadMoreGifs', data )
    });
  }

  render() {
    const LightBoxItem = <LightBox close={this.closeLightBox} image={this.state.currentLightBoxImage} prev={this.handlePrev} next={this.handleNext} />
    return (
      <div className="app__container" onKeyUp={this.handleKeyPress}>
        <Header shrinked={this.state.hasSearch} />

        <ImageCardList
          handleThumbClick={this.handleThumbClick}
          cards={this.state.loadedGif} />

        {
          this.state.showLightBox ?
          <CSSTransitionGroup
          transitionName="lightbox"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
          {LightBoxItem}
        </CSSTransitionGroup> : ''
        }

        {
          this.state.hasSearch ?
          <LoadMoreButton
            handleLoadMore={this.handleLoadMore} /> : ''
        }
        <Footer />
      </div>
    )
  }
}
