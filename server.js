const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var Users = require("./route/Users");
var Company = require("./route/Company");
var History = require("./route/History");
var News = require("./route/News");
var Dashboard = require("./route/Dashboard");

app.use("/user", Users);
app.use("/company", Company);
app.use("/history", History);
app.use("/news", News);
app.use("/dashboard", Dashboard);

app.listen(port, () => console.log(`Lisening on port ${port}`));
