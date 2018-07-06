import React, { Component } from 'react'
import ImageCard from './ImageCard';

export default class ImageCardList extends Component {

  render() {
    return (
      <div className="app__image__gallery">
        {
          this.props.cards.map( (current) => {
            return ( 
                <ImageCard 
                  handleThumbClick={this.props.handleThumbClick}
                  key={current.id}
                  id={current.id}
                  image={current.images.original_still.url} 
                  title={current.title} 
                  gifUrl={current.images.downsized.url}
                />
              )
          })
        }
      </div>
    )
  }
}
