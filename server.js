const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

//For production environemnt
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gbooks", 
{ 
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false 
}

);


// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes.js")(app);
//Define API routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});