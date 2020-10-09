import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"


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



        default:
            return state
    }
}