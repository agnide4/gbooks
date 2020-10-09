import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getBooks } from "../action"
import { v4 } from "uuid"
import { button } from "react-bootstrap"
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
            <div className="search userView">
                <h3>Search Results</h3>
                {
                    books.length === 0 ? (
                        <h3>Read and Read</h3>
                    ) : (
                        books.map((book) => (
                            
                            <div key = {v4()} className= "card">
                                <div className="card-title">Title: {book.title}</div>
                                <p>Authors: {book.authors}</p>
                                <textarea name="Description" defaultValue={book.description} />
                                <a href={book.infoLink} target="_blank">Info Link</a>
                                <img className="bimg" src={book.imageLinks.smallThumbnail}></img>
                                <button>SAVE TO FAVOURITES</button>
                            </div>


                        ))


                    )
                }
            
            
            </div>
            <div className="myBooks userView"><h3>My Books</h3></div>
            
        </div>
    )
}
