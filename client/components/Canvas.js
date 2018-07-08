import React, { Component } from 'react'
import Bubbles from './Bubbles';

export default class Canvas extends Component {
  constructor(props){
    super(props)
    this.canvasRef = React.createRef();
  }
  componentDidMount(){
    Bubbles(this.canvasRef.current.id);
  }
  render() {
    return (
      <canvas ref={this.canvasRef} id="canvas">
      </canvas>
    )
  }
}
