import React, { Component } from 'react';

import Movie from './Movie.js';

// App component - represents the whole app
export default class App extends Component {
    getMovies() {
    return [
      { _id: 1, title: 'Lord of the rings' },
      { _id: 2, title: 'Harry Potter' },
      { _id: 3, title: 'Hunger games' },
    ];
  }

  renderMovies() {
    return this.getMovies().map((movie) => (
      <Movie key={movie._id} movie={movie} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>List of movies</h2>
        </header>

        <ul>
          {this.renderMovies()}
        </ul>
      </div>
    );
  }
}