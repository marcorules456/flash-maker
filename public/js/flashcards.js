var i = 0;
var score =0;
var flashcardStyle = $(".flashcard").css('backgroundColor');
var flashTitle = $("<h1>").addClass("title").appendTo(".titleContainer");
var flashQuestion = $("<h3>").addClass("question questionId").appendTo(".questionContainer");
var numberCounter = $("<h3>").addClass("questionNum").appendTo(".numberContainer")
var start = i+1;



function interFace(){
	
$.get("http://localhost:3000/api/quiz",function(questionData){
	var quiz = questionData.flashData.quiz;
	var quizLength = quiz.length;
	var quizTitle = questionData.flashData.flashTitles[i].title;
	var quizQuestion = quiz[i].question;
	var quizAnswer = quiz[i].answer;
	$(".title").text(quizTitle);
	$(".questionNum").text("Question: "+start);
	$(".questionId").text(quizQuestion);
		$(".answerButton").on("click",function(event){
			event.preventDefault();
			var answer = $("#answers").val();
			var quizQuestion = quiz[i].question;


			submitter(answer,quizAnswer,quizQuestion,quizLength);
			$(".questionId").text(quizQuestion);
			$(".questionNum").text("Question: "+i);
		
			if(i == quizLength){
				scorer(score,quizLength);
			}
	});


$(".restart").on("click",function(){

	reset();
});
});
}




function submitter(userInput,answer,nextQuestion,length){
		 
	if(userInput == answer){
		$(".flashcard").addClass("right");
		setTimeout(classRemover,1000);
		score++;
		}
	else {
		$(".flashcard").addClass("wrong");
		setTimeout(classRemover,1000);
		}
	
      i++;
				

}


function classRemover(){
	$(".flashcard").removeClass("wrong");
	$(".flashcard").removeClass("right");
	$(".flashcard").addClass("normal");
}

function scorer(score,length){

	$(".titleContainer").hide();
	$(".questionContainer").hide();
	$(".numberContainer").hide();
	$(".inputContainer").hide();
	$("<h1>").text("Score").addClass("score").appendTo(".flashcard");
	$("<h3>").text("You got a "+ score+"/"+length).addClass("scoring").appendTo(".flashcard");
	$("<button>").addClass("restart").text("Restart").appendTo(".flashcard");
}




function reset(){
	i=0;
	$(".titleContainer").show();
	$(".questionContainer").show();
	$(".numberContainer").show();
	$(".inputContainer").show();
	$(".score").empty();
	$(".scoring").empty();
	$(".restart").empty();

}





interFace();