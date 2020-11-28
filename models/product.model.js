const mongoose=require('mongoose')

var productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:'this fielsd is required'
    },
    categoryId:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})
mongoose.model('Product',productSchema);
