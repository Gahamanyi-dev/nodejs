const express =require('express')
const mongoose=require('mongoose')
const admin=require('../middlewares/admin')
const Category=mongoose.model('Category')


var router=express.Router();

router.post('/',admin,(req,res)=>{
    let category=new Category();
    category.name=req.body.name;
    category.description=req.body.description;
    category.save()
    .then(categorySaved =>res.send(categorySaved).status(201))
    .catch(err =>res.send(err).status(400));
})

router.get('/',(req,res)=>{
    Category.find()
    .then(category =>res.send(category).status(201))
    .catch(err=>res.send(err).status(404))
})
router.get('/:id',(req,res)=>{
    Category.findById(req.params.id)
    .then(category=>res.send(category).status(201))
    .catch(err =>res.send(err).status(401))
})

router.put('/',admin,(req,res)=>{
    Category.findOneAndUpdate({_id:req.body._id},
        req.body,{new:true})
        .then(category=>res.send(category).status(201))
        .catch(err=>res.send(err).status(404));
});

router.delete('/:id',admin,(req,res)=>{
    Category.findByIdAndRemove(req.params.id)
    .then(category =>res.send(category).status(201))
    .catch(err =>res.send(err).status);
});

module.exports=router;


