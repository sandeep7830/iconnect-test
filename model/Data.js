const mongoose = require('mongoose');
const Schema= mongoose.Schema


const Dataschema = new Schema({
    companyname:{
        type:String
    },
    description:{
     type:String
    },
   number:{
       type:Number
   },
   email:{
       type:String
   },
   state:{
       type:String
   },
   city:{
       type:String
   }
})

module.exports=Car=mongoose.model('Data',Dataschema);