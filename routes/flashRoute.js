const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const exphbs = require("express-handlebars");
const bodyParser= require("body-parser");
const questionData = require("./../data/quizlet");


router.get("/api/quiz",function(req,res){
 res.json(questionData);
 

});


router.get("/flash",(req,res)=>{


	res.render("flashInterface",{exam1:questionData.flashData.flashTitles[0].title});

});

module.exports = router;