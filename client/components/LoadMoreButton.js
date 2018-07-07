import React, { Component } from 'react'

export default class LoadMoreButton extends Component {
  render() {
    return (
      <div className="app__load__more">
        <button onClick={this.props.handleLoadMore}>
          Load More Gifs
        </button>
      </div>
    )
  }
}
