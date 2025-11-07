const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

//we used to conncet router

app.use(require('./router/auth'));

const PORT = process.env.PORT;

//middelware

const middleware = (req,res,next)=>{
    console.log(`hello middelware`);
    next();
}


app. get('/', (req, res) => {
    res.send(`Hello world from the server`);
});

app. get('/Home', (req, res) => {
    res.send(`Hello Home from the server`);
});

app. get('/About', middleware,(req, res) => {
    console.log(`hello About`);
    res.send(`Hello About from the server`);
});

app. get('/Networks', (req, res) => {
    res.send(`Hello Network from the server`);
});

app. get('/Services', (req, res) => {
    res.send(`Hello services from the server`);
});

app. get('/Pick', (req, res) => {
    res.send(`Hello pick from the server`);
});

app. get('/Care', (req, res) => {
    //res.cookie("Test",'harsha');
    res.send(`Hello care from the server`);
});

app. get('/SignInForm', (req, res) => {
    res.send(`Hello SignInForm from the server`);
});

app. get('/SignUpForm', (req, res) => {
    res.send(`Hello SignUpFormfrom the server`);
});

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})