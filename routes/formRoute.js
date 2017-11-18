const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const exphbs = require("express-handlebars");
const bodyParser= require("body-parser");
const fs = require("fs");
const questionData = require("./../data/quizlet");
var i=0;

router.get("/test",function(req,res){
	res.render("formTest");
});
router.post("/test",function(req,res){
	var questionInfo = {
		title: req.body.title,
		question: req.body.question,
		description: req.body.description
	}


fs.appendFile("./data/quizlet.json",questionInfo);
	console.log(questionInfo);
	res.render("formTest");
	i++;
});

module.exports = router;