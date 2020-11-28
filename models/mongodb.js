const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log('connected to mongodb successfully....'))
.catch(err =>console.log('failed to connect to mongodb',err));
 
//Connecting Node and MongoDB
require('./product.model');
require('./category.model');