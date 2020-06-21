import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Movies } from '../api/movies.js';

import Movie from './Movie.js';

// App component - represents the whole app
class App extends Component {
    renderMovies() {
        return this.props.movies.map((movie) => (
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

export default withTracker(() => {
    return { 
        movies: Movies.find({}).fetch(),
    };
})(App);