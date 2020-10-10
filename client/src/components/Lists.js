import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getBooks, getSavedBooks } from "../action"
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


    useEffect(() => {
        dispatch(getSavedBooks())
    })

    const save = (e) =>  {
        console.log(e.currentTarget.getAttribute("title"))
        let title = e.currentTarget.getAttribute("title")
        let authors = [e.currentTarget.getAttribute("authors")]
        let desc = e.currentTarget.getAttribute("description")
        let infoLink = e.currentTarget.getAttribute("link")
        let image = e.currentTarget.getAttribute("image")
        console.log(title, authors, desc, infoLink, image)
    }

    

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
                                <button title={book.title} authors={book.authors} description={book.description} link={book.infoLink} image={book.imageLinks.smallThumbnail} onClick={(e) => {save(e)}}>SAVE TO FAVOURITES</button>
                            </div>


                        ))


                    )
                }
            
            
            </div>
            <div className="myBooks userView"><h3>My Books</h3></div>
            
        </div>
    )
}
