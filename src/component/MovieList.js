import React from 'react';
import Movie from './Movie';

const MovieList =(props) => {
    
    return(
        <div>
            {
                  props.movies.map((user, i) => {
                    return (
                    <Movie
                    key={i}
                    id={props.movies.id} 
                    name={props.movies.title} 
                    email={props.movies.overview}
                    />
                    );
                }) 
            }
            </div>
    );
}

export default MovieList;