const express = require('express');
const app = express();
const PORT = 4578
const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://najisha:4oLGwjTGmXn9O08T@cluster0.jssp599.mongodb.net/")
.then(()=>{console.log("MongoDB connect successfully")})
.catch((error)=>{console.log(error)});

app.get('/',(req,res)=>{
    res.send('server is running')

})

app.get('/about',(req,res)=>{
    res.send('  About')

})

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
})

