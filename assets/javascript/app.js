$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
//Final Trivia	
	Trivia Questions 
1.	INITITAION QUESTION
What Does min stand for ?
	a.	The name of the creator 
	b.	Abbreviation of minutes
	c.	Min
	d.	All the above)(now ***C is answer on code)

2.	Which is the only American state to begin with the letter 'p'? 
	a.	All is incorrect
	b.	Panama
	c.	Poland
	d.	Pennsylvania.

3.	Name the world's biggest island. 
	a.	Hawaii 
	b.	Greenland.
	c.	United Kingdom
	d.	Japan
4.	What is the world's longest river?
	a.	 Amazon.
	b.	Des Planes River
	c.	Mississippi River
	d.	All is incorrect
5.	Name the world's largest ocean.
	a.	 Pacific
	b.	Atlantic
	c.	Indian.
	d.	Southern
6.	What country is the most polluted since 2017?
	a.	USA
	b.	Canada
	c.	India
	d.	China
7.	What is the longest mountain range in planet “Earth”?
	a.	Andes
	b.	Rocky Mountains
	c.	Himalayas Mountains
	d.	Transatlantic

*/
var correct = 0;
var wrong = 0;
// ** following "q" variables is "S" 
var q1 = {
	question : 'Initiation Question: What does "min" stand for?',
	possibleAnswers : ['A. The name of the creator',
				 'B. The abbreveation of "minutes" ',
				 'C. "Min"',
				 'D.  All the following choices are correct'],
	flags : [false, false, false, true],
	//Boolean above confirms that the 4th option is Correct. Therfore "D" is "true".
	answer : 'D. All the following choices are correct'
};

var q2 = {
	question: 'Which is the only American state to begin with the letter "P"?',
	possibleAnswers: ['A. All the following choices are correct',
				 'B. Panama',
				 'C. Poland',
				 'D. Pennsylvania'],
	flags : [false, false, false, true],
	//Boolean above confirms that the 4th option is Correct. Therfore "D" is "true".
	answer : 'D. Pennsylvania'
};

var q3 = {
	question : 'Name the world\'s biggest island?',
	possibleAnswers : ['A. Hawaii',
				 'B. Greenland',
				 'C. United Kingdom',
				 'D. Japan'],
	flags : [false, true, false, false],
	//Boolean above confirms that the 4th option is Correct. Therfore "D" is "true".
	answer : 'B. Greenland'
};

var q4 = {
	question : 'What is the world\'s longest river?',
	possibleAnswers : ['A. Amazon River',
				 'B. Des Planes River',
				 'C. Mississippi',
				 'D. Nile River'],
	flags : [true, false, false, false],
	answer : 'A. Amazon River'
};

var q5 = {
	question : 'Name the world\'s largest ocean?',
	possibleAnswers : ['A. Atlantic Ocean',
				 'B. Pacific Ocean',
				 'C. Indian Ocean',
				 'D. Southern Ocean'],
	flags : [false, true, false, false],
	answer : 'B. Pacific Ocean'
};

var q6 = {
	question : 'What country is polluting everything\'s Earthly air the most?',
	possibleAnswers : ['A. USA',
				 'B. Canada',
				 'C. India',
				 'D. China'],
	flags : [false, false, false, true],
	answer : 'D. China'
};

var q7 = {
	question : 'What is the longest mountain range in planet "Earth"?',
	possibleAnswers : ['A. Andes Mountains',
				 'B. Rocky Mountains',
				 'C. Himalayas Mountains',
				 'D. Transatlantic Mountains'],
	flags : [true, false, false, false],
	answer : 'A. Andes Mountains'
};

var q8 = {
	question : 'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
	possibleAnswers : ['A. Typhoon Lagoon',
				 'B. Pleasure Island',
				 'C. Both A & B',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Pleasure Island'
};

var q9 = {
	question : 'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
	possibleAnswers : ['A. The Night Before Christmas',
				 'B. Three Little Pigs',
				 'C. The Old Mill',
				 'D. The Gallopin\' Gaucho'],
	flags : [false, false, false, true],
	answer : 'D. The Gallopin\' Gaucho'
};

var q10 = {
	question : 'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?',
	possibleAnswers : ['A. Recycling used film footage',
				  'B. Designing US Army & US Navy insignia',
				  'C. Hosted a Studio Victory Garden where employees grew food for their families',
				  'D. Forced employees to carpool by closing parking lots to non-carpool cars'],
	flags : [false, true, false, false],
	answer : 'B. Designing US Army & US Navy insignia'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}
// Function for timer
function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});