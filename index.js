import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "";

app.use(bodyParser.urlencoded({extended:true}));

app.get("",(req,res)=>{
   res.render("index.ejs");
});

app.listen(port,()=>{
    console.log("Server is up and running");
});