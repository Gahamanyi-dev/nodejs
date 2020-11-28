require('./models/mongodb')
const categoryControllers=require('./controllers/categoryControllers')
const userController=require('./controllers/userControllers')
const productControllers=require('./controllers/productControllers')
const middleware=require('./middlewares/auth')
const auth=require('./controllers/auth')
const config =require('config')
const express=require('express')

var app =express()
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

if(!config.get("key")){
    console.log('JWT PROVATE KEY IS NOT DEFINED');
    process.exit(1)
}
app.get('/',(req,res)=>{
    res.send('welcome to our app');
});
app.use('/api/categories',middleware,categoryControllers)
app.use('/api/products',middleware,productControllers)
app.use('/api/users',userController)
app.use('/api/auth',auth)

const port=process.env.PORT || 3000;
app.listen(port,
    console.log(`listening on port ${port}`)
);