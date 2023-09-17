import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
const API_URL = "";

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("",(req,res)=>{
   res.render("index.ejs");
});

app.listen(port,()=>{
    console.log("Server is up and running");
});