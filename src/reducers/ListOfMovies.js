import { SHOW_MOVIES } from "../actions";

const initialState = {
    movies: [],

}

export default function ListMovies(state = initialState, action) {
    switch (action.type) {
        case SHOW_MOVIES:
            return {
                ...state,
                movies : action.payload,
            };
        default:
            return state;
    }


}