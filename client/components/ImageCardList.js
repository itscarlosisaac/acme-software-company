import React, { Component } from 'react'
import ImageCard from './ImageCard';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';

export default class ImageCardList extends Component {

  render() {
    const cards = this.props.cards.map( (current) => {
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
    return (
      <div className="app__image__gallery">
        <CSSTransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300} >
          {cards}
        </CSSTransitionGroup>
      </div>
    )
  }
}


ImageCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleThumbClick: PropTypes.func.isRequired,
}