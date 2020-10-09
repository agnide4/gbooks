import axios from "axios"
import {GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"

const getSvalueSuccess = (searchTerm) => ({
    type: GET_SVALUE_SUCCESS,
    payload: searchTerm
  })
  //When Request from API fails
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
