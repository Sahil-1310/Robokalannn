var mongoose = require('mongoose');
    var Schema=new mongoose.Schema({
        name:{
            type:String
        },
        jobId:{
            type:String
        },
        sal:{
            type:Number
        },
        email:{
            type:String
        }
    })
    
    module.exports=mongoose.model('employee_details',Schema);