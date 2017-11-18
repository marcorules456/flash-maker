const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const exphbs = require("express-handlebars");
const bodyParser= require("body-parser");





router.post("/login",(req,res)=>{

var loginInfo=
	{ usernameInput: req.body.username,
	  passwordInput: req.body.password,
	  usernameAnswer: "marcorules456",
	  passwordAnswer: "first1"
	};

		if(loginInfo.usernameInput === loginInfo.usernameAnswer && loginInfo.passwordInput === loginInfo.passwordAnswer){
			
			res.redirect("/flash");
		}else {
			console.log("Wrong Password Marco");
		res.render("home");
		}
});



router.get("/login",(req,res)=>{

	res.render("home");
});


module.exports = router;