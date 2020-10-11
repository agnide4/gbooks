const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksModel = new Schema(
    {
        title: {
          type: String,
          trim: true,
          
          
        },
        description: {
          type: String
        },
        authors: [{
          type: String,
          trim: true,
          
        }],

        image: {
          type: String,
          trim: true
        },
        link: {
          type: String,
          trim: true
        }
      }
      
)

const Books = mongoose.model("Books", booksModel);

module.exports = Books;
