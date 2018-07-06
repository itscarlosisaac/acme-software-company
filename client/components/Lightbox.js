import React, { Component } from 'react'
import EventEmitter from '../events/emitter'

export default class LightBox extends Component {  
  render() {
    return (
      <div className="app__lightbox">
        <h2 onClick={this.props.close}>CLOSE</h2>
        <p onClick={this.props.prev}>Prev</p>
          <img 
            src={ this.props.image.images.downsized.url } 
            alt={ this.props.image.title } />

        <p onClick={this.props.next}>Next</p>
      </div>
    )
  }
}
