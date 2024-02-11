// const express = require( 'express' );
// var bodyParser = require('body-parser');

import express from "express"
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(express.static(path.join(__dirname, "../Client/dist")))

app.listen(3000,()=>{
    console.log("this is node server");
})