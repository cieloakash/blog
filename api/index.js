// const express = require( 'express' );
// var bodyParser = require('body-parser');

import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

import mongoose from "mongoose";
mongoose
  .connect(
    process.env.MONGOODB_CONNECTION_STRING
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

console.log;

const app = express();
app.use(express.static(path.join(__dirname, "../Client/dist")));

app.listen(3000, () => {
  console.log("this is node server");
});
