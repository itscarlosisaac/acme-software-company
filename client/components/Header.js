import React, { Component } from 'react'
import GifServices from '../services/gifServices';

export default class Header extends Component {

  componentWillMount = () => {
    console.log(GifServices.FecthData('ryan', 10, 0))
  }
  
  render() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    )
  }
}
