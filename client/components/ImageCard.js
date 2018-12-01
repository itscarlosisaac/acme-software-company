import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ImageCard extends Component {

  handleClick = () => {
    this.props.handleThumbClick(this.props.id)
  }
  render() {
    return (
      <div className="image__card" onClick={this.handleClick}>
        <div className="image__card--thumb">
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <h3 className="image__card--title">{this.props.title}</h3>
      </div>
    )
  }
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleThumbClick: PropTypes.func.isRequired,
}