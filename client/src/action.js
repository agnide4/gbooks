import axios from "axios"

import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE, SAVE_BOOK_SUCCESS, SAVE_BOOK_FAILURE, SAVE_BOOK_REQUEST} from "./constants"
import {GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE} from "./constants"
import {GET_SBOOKS_REQUEST, GET_SBOOKS_SUCCESS, GET_SBOOKS_FAILURE } from "./constants"
import { DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE } from "./constants"



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
              if(response){
                let info = [];
                response.data.items.map((item) => {
                  info.push(item.volumeInfo)
              })
                 console.log(info)
                 dispatch(getBooksSuccess(info))

              }
              
          })
          .catch((error) =>{
              console.log(error)
              dispatch(getBooksfailure(error))
          })
    }
}

const getSbooksSuccess = (savedBooks) => ({
    type: GET_SBOOKS_SUCCESS,
    payload: savedBooks
})

const getSbooksFailure = (error) =>({
    type: GET_SBOOKS_FAILURE,
    payload: error
})

export const getSavedBooks = () => {
    return (dispatch, getState) => {
        axios
            .get("/api/books")
            .then((response) => {
                console.log(response)
                dispatch(getSbooksSuccess(response.data))

            })
            .catch((error) => {
                console.log(error.message)
                dispatch(getSbooksFailure(error))
            })
    }
}

const saveBookSuccess = () => ({
    type: SAVE_BOOK_SUCCESS,
    
})

const saveBookFailure = (error) => ({
    type: SAVE_BOOK_FAILURE,
    payload: error
})

export const saveMyBook = (book) =>{

    console.log ("Action to save", book)
    return (dispatch, getState) => {
        dispatch({type: SAVE_BOOK_REQUEST})
        
        axios
            .post("/api/books", book)
            .then((response) => {
                if(response.status === 200){
                    console.log(response)
                dispatch(saveBookSuccess())
                dispatch(getSavedBooks())
                
                }
                
            })
            .catch((error) => {
                dispatch(saveBookFailure(error.message))
            })
    }
}

const deleteBookSuccess = () => ({
    type: DELETE_BOOK_SUCCESS
})

const deleteBookFailure = (error) => ({
    type: DELETE_BOOK_FAILURE,
    payload: error
})

export const deleteBook = (id) =>{
    return(dispatch, getState) =>{
        dispatch({type: DELETE_BOOK_REQUEST})
        axios
            .delete("/api/books/" + id)
            .then((response) => {
                dispatch(deleteBookSuccess())
                dispatch(getSavedBooks())
            })
            .catch((error) => {
                console.log(error)
                dispatch(deleteBookFailure())
            })
    }
}