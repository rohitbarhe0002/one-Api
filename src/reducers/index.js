import { combineReducers } from 'redux';
import ListBooks from './ListOfBooks';
import ListMovies from './ListOfMovies';
import ListMoviesQuotes from './ListOfMoviesquotes';
import ListCharacters from './ListOfCharacters';

export default combineReducers({

    ListBooks,
    ListMovies,
    ListMoviesQuotes,
    ListCharacters,
    

});