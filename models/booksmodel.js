const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksModel = new Schema(
    {
        title: {
          type: String,
          trim: true,
          required: true
          
        },
        description: String,
        authors: [{
          type: String,
          trim: true,
          required: true
        }],

        thumbnail: {
          type: String,
          trim: true
        },
        infoLink: {
          type: String,
          trim: true
        }
      }
      
)

const Books = mongoose.model("Books", booksModel);

module.exports = Books;
