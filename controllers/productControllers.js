const express =require('express')
const mongoose=require('mongoose')
var router=express.Router()
const Product=mongoose.model('Product')
const category=mongoose.model('Category')
const admin=require('../middlewares/admin')


router.post('/',admin,(req,res)=>{
    let product=new Product();
    product.name=req.body.name;
    product.categoryId=req.body.categoryId; 
    product.price=req.body.price;
    product.save()
    .then(productSaved =>res.send(productSaved).status(201))
    .catch(err =>res.send(err).status(400));
});

router.get('/',(req,res)=>{
    Product.find()
    .then(product =>res.send(product).status(201))
    .catch(err=>res.send(err).status(404))
});
router.get('/:id',(req,res)=>{
    Product.findById(req.params.id)
    .then(product=>res.send(product).status(201))
    .catch(err =>res.send(err).status(401))
});

router.put('/',admin,(req,res)=>{
    Product.findOneAndUpdate({id:req.body.id},
        req.body,{new:true})
        .then(product=>res.send(product).status(201))
        .catch(err=>res.send(err).status(404));
});

router.delete('/:id',admin,(req,res)=>{
    Product.findByIdAndRemove(req.params.id)
    .then(product =>res.send(product).status(201))
    .catch(err =>res.send(err).status);
});

router.get('/:categoryId', (req,res) => {
 Product.find({categoryId:req.params.categoryId})
        .then(product => res.send(product))
        .catch(err => res.send(err).status(404));
    });


module.exports=router;


