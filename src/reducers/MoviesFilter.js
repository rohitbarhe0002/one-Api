import {SET_MOVIE_FILTERS } from '../actions';

  const initialState = {

     movie: {
      filters: { budgetInMillions: 50 ,runtimeInMnutes:100,orderBy: 'name', order: 'asc'},   

    }
}
  

export default function MovieFilter (state = initialState, action) {

    switch (action.type) {
case SET_MOVIE_FILTERS:
    return {
      ...state,      
       movie: action.payload,
        }
      
    
    default:
        return state;
    }

}