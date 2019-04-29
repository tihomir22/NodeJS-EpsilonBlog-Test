const mongoose = require('mongoose');

//Creamos las colecciones (las tablas)
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;