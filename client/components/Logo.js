import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
export default class Logo extends Component {
  render() {
    return (
      <Fragment>
        <img className="app__logo" src="./assets/logo.svg" width={this.props.w} />
      </Fragment>
    )
  }
}

Logo.propTypes = {
  w: PropTypes.number,
}

Logo.defaultProp = {
  w: 140,
};