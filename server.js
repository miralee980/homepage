/* ===============================
 LOAD THE  DEPENDENCIES 
 =============================== */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

/* ===============================
 LOAD THE CONFIG
 =============================== */
const config = require("./config");
const port = process.env.PORT || 5000;

/* ===============================
    EXPRESS CONFIGURATION
 =============================== */
const app = express();
app.use(cors());

// parse JSON and url-encoded query
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// print the request log on console
app.use(morgan("dev"));

// set the secret key variable for jwt
app.set("jwt-secret", config.secret);

// configure api router
app.use("/api", require("./routes/api"));

// open the server
app.listen(port, () => console.log(`Lisening on port ${port}`));
