import React, { Component } from 'react'
import Canvas from './Canvas';
import SearchFor from './SearchFor';

import Logo from './Logo';

export default class Header extends Component {
  render() {
    return (
      <header 
        className={this.props.shrinked ? `app__header app__header--shrinked`: `app__header`}>
        {/* <Canvas /> */}
        <Logo w="140" />
        <h2 className="app__header--title">Welcome to the funniest gif <br/> search website.</h2>
        <SearchFor />
      </header>
    )
  }
} 
