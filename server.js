const express = require('express');
const app= express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

app.use(fileUpload());

const connectdb=async()=>{
    try {
       await mongoose.connect('mongodb+srv://sandeep123:sandeep123@cluster0.yajip.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', 
       { useNewUrlParser: true ,
        useUnifiedTopology: true 
    });
   
   console.log('mongodb connected');
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}

connectdb();

app.get('/',(req,res)=>{
    res.send("hii")
})

app.use( express.json({extended:false}))

app.use('/data',require('./routes/data'));



const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server started at ${PORT}`))
