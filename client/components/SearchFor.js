import React, { Component, Fragment } from 'react'
import GifServices from '../services/gifServices';
import EventEmitter from '../events/emitter';

export default class SearchFor extends Component {
  state = {
    value: '',
    gifs: [],
    gifCount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    GifServices.FecthData(this.state.value, 5, 0, (data) => {
      this.setState( (prevState) => {
        EventEmitter.emit('LoadGifs', data)
        return { 
            gifs: data,
            gifCount: data.length
          }
      })
    })
  }

  handleChange = (event) => {
    const val = event.target.value;
    this.setState({value: val})
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search for a gif" />
        </form>
      </Fragment>
    )
  }
}
