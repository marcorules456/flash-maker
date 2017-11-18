const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require("http");
const exphbs = require("express-handlebars");
const bodyParser= require("body-parser");
const loginRoute = require("./routes/loginRoute");
const formRoute = require("./routes/formRoute");
const flashRoute = require("./routes/flashRoute");
const questionData = require("./data/quizlet");
const htmlRoutes = require("./routes/htmlRoutes");

app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(loginRoute);
app.use(flashRoute);
app.use(formRoute);
app.use(htmlRoutes)


app.get("/api/quiz",function(req,res){
 res.json(questionData);
 

});



console.log(questionData.flashData.flashTitles[0].title);
console.log("/flashcard/"+questionData.flashData.flashTitles[0].title);
