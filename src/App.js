import React from 'react';
import MovieList from './component/MovieList';
import SearchBox from './component/SearchBox';
// import Scroll from './Scroll';
import './App.css';


class App extends React.Component{
    constructor () {
        super()
        this.state = {
            movies : [],
            searchfieald :''
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eb2da9f4865b11165c5751549731b90a&language=en-US&page=1')
        .then(response=> {
            return response.json();
        })
        .then(users=> {
            this.setState({movies : users.results})
            console.log(this.state.movies);
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfieald : event.target.value})
        
       
    }
    render () {
        const filteredMovies= this.state.movies.filter(movie => {
            return movie.title.toLowerCase().includes(this.state.searchfieald.toLowerCase())
        });
        console.log(filteredMovies);
        return (
            <div class ='tc'>
                <h1 className ='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                
                <MovieList movies={filteredMovies} />
                
            </div>
        );
    }
}

export default App;