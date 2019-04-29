const path = require('path');
const express = require('express');
const expressEdge = require('express-edge');
const mongoose=require('mongoose');


const app = new express();
mongoose.connect('mongodb://localhost/node-js-blog');

//añadir funciones al framework de express
app.use(express.static('public'));
app.use(expressEdge);

app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.render('index');
    //res.sendFile(path.resolve(__dirname,"pages/index.html"));
})
app.get('/about', (req, res) => {
    //res.sendFile(path.resolve(__dirname,"pages/about.html"));
    res.render('about');
})
app.get('/post', (req, res) => {
    //res.sendFile(path.resolve(__dirname, "pages/post.html"));
    res.render('post');
})
app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname,"pages/contact.html"));
    res.render('contact');
})

app.listen(1488, () => {
    console.log("Server iniciado 1488");
})