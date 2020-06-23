import React, { Component } from 'react';

import { Movies } from '../api/movies.js'

export default class Movie extends Component {

  upvoteMovie() {
    Movies.update(this.props.movie._id, {
      $set: {ranking: this.props.movie.ranking + 1 },
    });
  }

  downvoteMovie() {
    Movies.update(this.props.movie._id, {
      $set: {ranking: this.props.movie.ranking == 0 ? 0 : this.props.movie.ranking - 1 },
    });
  }

  deleteMovie() {
    Movies.remove(this.props.movie._id);
  }

    render() {
      return (
      <li className="list">
        <span className="title">{this.props.movie.title} </span>
        <button className="delete" onClick={this.deleteMovie.bind(this)}>
          &times;
        </button>
        <button className="downvote" onClick={this.downvoteMovie.bind(this)}>
          -
        </button>
        <button className="upvote" onClick={this.upvoteMovie.bind(this)}>
          +
        </button>
        <span className="ranking" style={{width: '20%'}}>Ranking: {this.props.movie.ranking} </span>
      </li>      
      );
    }
}