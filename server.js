const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./server/config/database");
const mainRoutes = require("./server/routes/main");
const postRoutes = require("./server/routes/posts");

//Use .env file in config folder
require("dotenv").config({ path: "./server/config/.env" });

// Passport config
require("./server/config/passport")(passport);

//Connect To Database
connectDB();

//cors
app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://localhost:3000")
//     res.header("Access-Control-Allow-Headers", "https://localhost:3000")
//     next()
// });

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});
  