const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))

const commentSchema = {
    name: String,
    comment: String
}

const Comment = mongoose.model("Comment", commentSchema);

(async () =>  {
    const db = await mongoose.connect('mongodb://localhost/comment-box')
    console.log('Database is connected to:',db.connection.name)
})();

app.get("/",  function(req, res) {
        res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    let newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    })
    newComment.save();
    res.redirect('/')
})



app.listen(4000, function( ) {
    console.log("server is running on 4000")
})