const mongoose = require('mongoose');


// const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";



// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));

module.exports = {
    mongoURI = "mongodb+srv://agnide4:" +  +"@cluster0.o4x6m.gcp.mongodb.net/books?retryWrites=true&w=majority"
}