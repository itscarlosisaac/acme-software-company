import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}
