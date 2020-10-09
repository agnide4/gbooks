import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
import {GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE} from "./constants"


export const initialState = {
    books: [],
    searchTerm: "",
    savedBooks: [],
    error: ""
  };


export default (state = initialState, action) =>{
    switch(action.type){
        case GET_SVALUE_REQUEST:
            return {...state, searchTerm: "", error: null}
        case GET_SVALUE_SUCCESS:
            return {...state, searchTerm: action.payload, error: null}
        case GET_SVALUE_FAILURE:
            return {...state, error: action.payload} 
        case GET_BOOKS_REQUEST:
            return {...state, books: [], error: null}
        case GET_BOOKS_SUCCESS:
            return {...state, books: action.payload, error: null}
        case GET_BOOKS_FAILURE:
            return {...state, error: action.payload}    

        default:
            return state
    }
}