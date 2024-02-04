require('./db/connect.js')
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const path = require("path");
const dburi = "mongodb+srv://netninja:test1234@cluster0.j9bqysp.mongodb.net/";
const tasks = require('./routes/tasks.js');
const notFound= require("./middleware/notfound")
const error= require("./middleware/errorhandler")
app.use(express.json());

app.use('/api/v1/tasks',tasks);
app.use(notFound)
app.use(error)

app.listen(3000, () => {
    console.log('Serving on port 3000');
})
