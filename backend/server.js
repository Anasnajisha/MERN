const express = require('express');
const app = express();
const PORT = 4578
const mongoose=require('mongoose');
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://najishathaikulathil:f47S3aEWZL0UyyuJ@cluster0.600aoqs.mongodb.net/")
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



//READ

app.get('/getData', async (req, res) => {
    try {
        console.log("reading data")
        const data = await PRODUCT.find({}) //code that find all data from backend
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


// For deleteing and updating we are using "ids" of entry and then do the procedd

//UPDATE


app.put('/updateData/:id', async (req, res) => {
    try {

        let id = req.params.id
        let updateData = { $set: req.body }

        const updated = await PRODUCT.findByIdAndUpdate(id, updateData)

        res.json(updated)

    }  catch (error) {
        console.log(error)
        res.send('error')
    }

})


//DELETE
router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id
        console.log('id check', id)

        const updated = await PRODUCT.findByIdAndDelete(id)

        res.send("deleted successfully")

    } catch (error) {
        console.log(error)
        res.send('error')
    }
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

