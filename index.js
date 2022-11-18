var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(express.json());
app.use(bodyparser.json({ limit: "50mb"}));
app.use(bodyparser.urlencoded({limit: "50mb", extended:true}));
mongoose.connect("mongodb://127.0.0.1:27017/collagedb")
var db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.on('open', () => {
    console.log("Connected");
});

app.get("/", (req, res)=>{
    res.end("welcome")
});

app.use("/student", require("./routes/student"));


app.listen(8081, (req, res)=>{
    console.log("server is running on http://localhost:8081")
});