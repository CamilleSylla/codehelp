import React from 'react';

const Movie = ({title, overview, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'Robot' src ={`https://robohash.org/${id}?200x200`}></img>
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>
            </div>
    );
}        

export default Movie;