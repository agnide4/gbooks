import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getBooks } from "../action"

import "../App.css"



export default function Lists() {
    const dispatch = useDispatch()

    const [searchTerm, error, books, savedBooks] = useSelector((gState) => [
        gState.searchTerm,
        gState.error,
        gState.books,
        gState.savedBooks
    ])


    useEffect(() => {
        const timer = setTimeout(() =>{
            console.log(searchTerm)
            if(searchTerm){
                dispatch(getBooks(searchTerm))
            }
           
        },2000)
        return () => {
            clearTimeout(timer)
        }
    }, [searchTerm])

    return (


        <div className = "container-fluid result">
            <div className="search userView"><h3>Search Results</h3></div>
            <div className="myBooks userView"><h3>My Books</h3></div>
            
        </div>
    )
}
