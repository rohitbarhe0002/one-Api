import { SHOW_BOOKS } from "../actions";

const initialState = {
    books: [],

}

export default function ListBooks(state = initialState, action) {
   
    switch (action.type) {
        case SHOW_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state;
    }


}