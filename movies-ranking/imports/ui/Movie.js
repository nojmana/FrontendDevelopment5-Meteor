import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
      return (  
        <li>{this.props.movie.title}</li>
      );
    }
}