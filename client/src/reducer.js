
import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
import {GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE} from "./constants"
import { GET_SBOOKS_REQUEST, GET_SBOOKS_SUCCESS, GET_SBOOKS_FAILURE } from "./constants"
import { SAVE_BOOK_REQUEST, SAVE_BOOK_SUCCESS, SAVE_BOOK_FAILURE } from "./constants"
import { DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE } from "./constants"

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
            
        case GET_SBOOKS_REQUEST:
            return {...state, savedBooks: [], error: null}
        case GET_SBOOKS_SUCCESS:
            return {...state, savedBooks: action.payload, error: null}
        case GET_SBOOKS_FAILURE:
            return {...state, error: action.payload}

        case SAVE_BOOK_REQUEST:
            return {...state, savedBooks: [], error: null}
        case SAVE_BOOK_SUCCESS:
            return {...state, error: null}
        case SAVE_BOOK_FAILURE:
            return {...state, error: action.payload}

        case DELETE_BOOK_REQUEST:
            return {...state, savedBooks: [], error: null}
        case DELETE_BOOK_SUCCESS:
            return {...state, savedBooks: action.payload, error: null}
        case DELETE_BOOK_FAILURE:
            return {...state, error: action.payload}

        default:
            return state
    }
}