const mongoose=require('mongoose')
const dotenv=require('dotenv');
const express=require('express');

const app=express();
dotenv.config({path:'./config.env'});
const db=require("./db/conn");

const PORT=process.env.PORT;
app.use(express.json());
app.use(require('./router/auth'));

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
})
