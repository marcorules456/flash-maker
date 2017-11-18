const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const exphbs = require("express-handlebars");
const bodyParser= require("body-parser");


const questionData = require("./../data/quizlet");


router.get("/login",(req,res)=>{
	console.log("runnimg");
		res.sendFile(path.resolve(__dirname+"/../public/home.html"));
});

router.get("/flashcard",(req,res)=>{
	res.sendFile(path.resolve(__dirname+"/../public/flashcard.html"));
});

module.exports = router;