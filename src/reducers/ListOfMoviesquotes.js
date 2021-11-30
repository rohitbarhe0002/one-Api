import { SHOW_MOVIES_QUOTES } from "../actions";

const initialState = {
    moviesquotes: [],

}

export default function ListMoviesQuotes(state = initialState, action) {
    switch (action.type) {
        case SHOW_MOVIES_QUOTES:
            return {
                ...state,
                moviesquotes : action.payload,
            };
        default:
            return state;
    }


}