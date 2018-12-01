import React, { Component } from 'react'
import PropTypes from 'prop-types';
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

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
}