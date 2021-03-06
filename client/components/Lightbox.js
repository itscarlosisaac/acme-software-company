import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class LightBox extends Component {
  render() {
    return (
      <div className="app__lightbox__container">
        <div className="app__lightbox__content">
          <h2 className="app__lightbox__close" onClick={this.props.close}>&times;</h2>
          <p className="app__lightbox__prev" onClick={this.props.prev}>Prev</p>
            <img 
              src={ this.props.image.images.downsized.url } 
              alt={ this.props.image.title } />
            {
              this.props.image.title ? 
              <h3 className="app__lightbox__title">{ this.props.image.title } </h3> : ''
            }
          <p className="app__lightbox__next" onClick={this.props.next}>Next</p>
        </div>
      </div>
    )
  }
}

LightBox.propTypes = {
  image: PropTypes.object.isRequired,
  prev: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
}