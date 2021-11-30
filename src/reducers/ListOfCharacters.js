import { SHOW_CHARACTERS } from "../actions";

const initialState = {
    characters: [],

}

export default function ListCharacters(state = initialState, action) {
    switch (action.type) {
        case SHOW_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            };
        default:
            return state;
    }


}