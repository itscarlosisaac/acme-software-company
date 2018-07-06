import React, { Component } from 'react'
import Canvas from './Canvas';
import ImageCard from './ImageCard';
import SearchFor from './SearchFor';

import Logo from './Logo';

export default class Header extends Component {
  render() {
    return (
      <header className="app__header">
        {/* <Canvas /> */}
        <Logo w="140" />
        <h2 className="app__header--title">Welcome to the funniest gif search website.</h2>
        <SearchFor />
        {
          /* 
            this.state.arr.map( (i) => {
              return <ImageCard key={i.id} title={i.title} image={i.images.downsized.url} />
            }) 
          */
        }
      </header>
    )
  }
} 
