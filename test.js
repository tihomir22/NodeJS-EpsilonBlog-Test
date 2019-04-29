const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/node-js-test-blog')

/*Post.create({
    title: 'Mira mi huevo loco',
    description: 'Ahora abre la boca',
    content: 'Cluck cluck cluck cluck'
}, (error, post) => {
    console.log(error, post)
})*/

/*Post.find({}, (error, post) => {
    console.log(error, post)
})*/

Post.findById("5cc6f977e410e92dbc83f6cf",(error,post)=>{
    console.log(error,post)
})