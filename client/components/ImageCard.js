import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {
    return (
      <div className="image__card">
        <div className="image__card--thumb">
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <h3 className="image__card--title">{this.props.title}</h3>
      </div>
    )
  }
}
