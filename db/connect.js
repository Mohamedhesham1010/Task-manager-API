const mongoose = require("mongoose");
const dburi = "mongodb+srv://netninja:test1234@cluster0.j9bqysp.mongodb.net/";

mongoose
.connect(dburi)
.then(()=>console.log('connected goooo'))
.catch( (err) => console.log(err) );