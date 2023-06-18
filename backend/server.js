const express = require('express');
const app = express();
const PORT = 4578
const mongoose=require('mongoose');
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://najishathaikulathil:f47S3aEWZL0UyyuJ@cluster0.600aoqs.mongodb.net/MES")
.then(()=>{console.log("MongoDB connect successfully")})
.catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message

// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE



const PRODUCT = require("./model/product")

app.post('/addData',async (req, res) => {
    try {

        let item = req.body
        console.log(item)


        const saveData = await PRODUCT(item)
        await saveData.save()
        res.send((saveData))


    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});