import React, { Component, Fragment } from 'react'

export default class Logo extends Component {
  render() {
    return (
      <Fragment>
        <img className="app__logo" src="./assets/logo.svg" width={this.props.w} />
      </Fragment>
    )
  }
}
