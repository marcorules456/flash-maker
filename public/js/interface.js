var i=0;
$(".logoBox").on("click",function(){
	$(".logoBox").animate({height:"+700px"});
	$(".optionContainer").animate({opacity:1});
});



$("#create").on("click",function(){

flashConstruct();
i++;
});

function flashConstruct(){
	
var flashcardContainer = $("<div>").addClass("flashcards flashcard"+i).appendTo(".flashcardContainer");
var border = $("<div>").addClass("border").appendTo(".flashcard"+i);
var title = $("<h4>").appendTo(".flashcard"+i).text("Topic");
var detail = $("<p>").attr("text-align","center").appendTo(".flashcard"+i).text("Description");
var link = $("<a>").addClass("flashlink"+i);
link.attr("href","/flashcard"+i).appendTo(".flashcard"+i);
var use = $("<button>").addClass("clicks btn btn-info log").text("Use Card").appendTo(".flashlink"+i);
}