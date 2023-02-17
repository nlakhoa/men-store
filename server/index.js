const path = require("path");
const express = require("express");
const morgan = require("morgan");

const port = 3000;
const route = require("./router");
const db = require("./config/db");
const methodOverride = require("method-override");
// const Middleware = require('./middleware/Middleware')
const cors = require("cors");
var bodyParser = require("body-parser");

// Connect DB
db.connect();

const app = express();
const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(methodOverride("_method"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// app.use(Middleware)
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", 
                    "Origin, X-Rquested-With, Content-Type, Accept");
    next();
});
// HTTP logger
app.use(morgan("combined"));
// Template engine



route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
