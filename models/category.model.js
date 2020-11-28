const mongoose=require('mongoose')

var categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:'this fielsd is required'
    },
    description:{
        type:String,
        required:true
    }
})
mongoose.model('Category',categorySchema);
