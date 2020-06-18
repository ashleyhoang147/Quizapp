//storage of questions
var myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correctAnswers: "alerts"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correctAnswer: "parentheses"
    },
   {
    question: "What method can be used to  execute a block of code a number of times",
    answers: ["loops", "balls", "circles", "squares"],
    correctAnswer: "loops"
   }
  ];
  //Creating a place to put the quiz
  var quizContainer = document.getElementById('quiz');
  //Creating a place to put the results 
  var resultsContainer = document.getElementById('results');
  //Creating a place to submit 
  var submitButton = document.getElementById('submit');
  //Creating a function that combine the 3 elements together
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;
 //Creating a loop to check the answer submitted
    for(var i=0; i<questions.length; i++){
        answers = [];
        for(letter in questions[i].answers){
            answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
        }
        output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
    }
    quizContainer.innerHTML = output.join('');
}
}