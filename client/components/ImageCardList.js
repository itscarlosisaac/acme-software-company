import React, { Component } from 'react'
import EventEmitter from '../events/emitter';
import ImageCard from './ImageCard';

export default class ImageCardList extends Component {
  state = {
    images: []
  }
  componentDidMount = () => {
    EventEmitter.on('LoadGifs', (data) => {
      let upcomingData = [ ...data ]
      this.setState({ images: upcomingData })
    })
  }

  render() {
    return (
      <div className="app__image__gallery">
        {
          this.state.images.map( (current) => {
            return <ImageCard image={current.images.original_still.url} title={current.title}/>
          })
        }
      </div>
    )
  }
}
