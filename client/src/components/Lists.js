import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getBooks, getSavedBooks, saveMyBook } from "../action"
import { v4 } from "uuid"
import { button } from "react-bootstrap/Button"
import "../App.css"
import { delete } from '../../../controllers/controller'




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
    }, [])

    const save = (e) =>  {
        console.log(e.currentTarget.getAttribute("title"))
        const book = {
            title : e.currentTarget.getAttribute("title"),
            authors : [e.currentTarget.getAttribute("authors")],
            description : e.currentTarget.getAttribute("description"),
            link : e.currentTarget.getAttribute("link"),
            image : e.currentTarget.getAttribute("image")
        }
        const checkForBook = (book) => {
            savedBooks.map(item => {
              return item.link
            }).includes(book.link)
          }
      
      if (!checkForBook(book.link)){
        dispatch(saveMyBook(book))
      } else {
          console.log("You already saved this book")
      }
        
    }


    const handleDelete = (e) => {
        console.log(e.target.id)
        const id = e.target.id
        dispatch(deleteBook(id))
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
                                <img className="bimg" src={book.imageLinks.thumbnail}></img>
                                <button  title={book.title} authors={book.authors} description={book.description} image={book.imageLinks.thumbnail} link={book.infoLink}  onClick={(e) => {save(e)}}>SAVE TO FAVOURITES</button>
                            </div>


                        ))


                    )
                }
            
            
            </div>
            <div className="myBooks userView"><h3>My Books</h3>

            {
                    savedBooks.length === 0 ? (
                        <h3>Read and Read</h3>
                    ) : (
                        savedBooks.map((book) => (
                            
                            <div key = {book._id} className= "card">
                                <div className="card-title">Title: {book.title}</div>
                                <p>Authors: {book.authors}</p>
                                <textarea name="Description" defaultValue={book.description} />
                                <a href={book.link} target="_blank">Info Link</a>
                                <img className="bimg" src={book.image}></img>
                                <button id={book._id} title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link}  onClick={(e) => {handleDelete(e)}}>DELETE</button>
                            </div>


                        ))


                    )
                }
            
            
            
            
            </div>
            
        </div>
    )
}
