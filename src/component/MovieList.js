import React from 'react';

const MovieList =({movies}) => {
    
    return(
        <div>
            {
                  movies.map((user, i) => {
                    return (
                        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                        <img></img>
                            <div>
                                <h2>{user.title}</h2>
                                <p>{user.overview}</p>
                            </div>
                        </div>
                    );
                }) 
            }
            </div>
    );
}

export default MovieList;