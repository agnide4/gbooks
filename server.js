const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");
// const routes = require("./routes")
const apiRouter = require("./routes/apiRoutes");
// require("./database")

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));


// console.log(apiRouter.stack[0].route)

app.use(express.json());
// app.use(express.static("public"));

app.use("/api", apiRouter)

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

// Seeding DB for development.
// require("./db/seed.js");



// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes.js")(app);
//Define API routes



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});