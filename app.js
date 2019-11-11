const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./sql");
const util = require('util')

const app = express();

const PORT = process.env.PORT || 4300;

app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(bodyParser.json());