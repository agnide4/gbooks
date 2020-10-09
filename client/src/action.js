import axios from "axios"

import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
import {GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE} from "./constants"


const getSvalueSuccess = (searchTerm) => ({
    type: GET_SVALUE_SUCCESS,
    payload: searchTerm
  })
  
  const getSvalueFailure = (error) => ({
    type: GET_SVALUE_FAILURE,
    payload: error,
  })

  export const getSvalue = (svalue) =>{
      return (dispatch, getState) => {
          dispatch({type: GET_SVALUE_REQUEST})
          if(svalue){
              dispatch(getSvalueSuccess(svalue))
          }else{
              dispatch(getSvalueFailure())
          }
      }
}

const getBooksSuccess = (books) =>({
    type: GET_BOOKS_SUCCESS,
    payload: books

})

const getBooksfailure = (error) =>({
    type: GET_BOOKS_FAILURE,
    payload: error
    
})

export const getBooks = (searchTerm) => {
    return (dispatch, getState) => {
        axios
          .get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm + "&key=AIzaSyDY0aJO52_xe73TsJfWuTY_YvAFKEgMjUc")

          .then((response) => {
              console.log(response.data.items)
          })
          .catch((error) =>{
              console.log(error)
          })
    }
}

