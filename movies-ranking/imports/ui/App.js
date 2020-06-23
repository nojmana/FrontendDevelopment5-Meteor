import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Movies } from '../api/movies.js';

import Movie from './Movie.js';

const sort = new ReactiveVar(-1);

// App component - represents the whole app
class App extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const title = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Movies.insert({
            title,
            createdAt: new Date(),
            ranking: 0,
        });

        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    changeSortingOrder() {
        sort.set(sort.get() * (-1));
    }


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

            <button className="sort" onClick = {this.changeSortingOrder.bind(this)} >
                &#8645; </button>

            <form className="new-movie" onSubmit={this.handleSubmit.bind(this)} >
                <input
                type="title"
                ref="textInput"
                placeholder="Type to add a new movie"
                />
            </form>
            </header>

            <ul>
                {this.renderMovies()}
            </ul>
        </div>
        );
    }
}

export default withTracker(() => {
    console.log(sort.get())
    return { 
        movies: Movies.find({}, { sort : { ranking : sort.get() } }).fetch(),
    };
})(App);