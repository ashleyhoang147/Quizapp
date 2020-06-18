//storage of questions
var myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
          a: "strings", 
          b: "booleans", 
          c: "alerts", 
          d: "numbers",
      },
      correctAnswers: 'c'
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: {
          a: 'quotes', 
          b: 'curly brackets', 
          c: 'parentheses', 
          d: 'square brackets'
        },
      correctAnswer: 'c'
    },
   {
    question: "What method can be used to  execute a block of code a number of times",
    answers: {
        a: 'loops', 
        b: 'balls', 
        c: 'circles',
        d: 'squares'
    },
    correctAnswer: 'a'
   }
  ];
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
      function showQuestions(questions, quizContainer){
          // Creating a place to store the output and the answer choices
          var output = [];
          var answers;
  
          // Show each question with its answer
          for(var i=0; i<questions.length; i++){
              
              // first reset the list of answers
              answers = [];
  
              // for each available answer...
              for(letter in questions[i].answers){
  
                  // ...add an html radio button
                  answers.push(
                      '<label>'
                          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                          + letter + ': '
                          + questions[i].answers[letter]
                      + '</label>'
                  );
              }
  
              // add this question and its answers to the output
              output.push(
                  '<div class="question">' + questions[i].question + '</div>'
                  + '<div class="answers">' + answers.join('') + '</div>'
              );
          }
  
          // finally combine our output list into one string of html and put it on the page
          quizContainer.innerHTML = output.join('');
      }
//the questions and quizContainer values will come from the generateQuiz function
showQuestions(questions, quizContainer);
function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
//keep track of user's answer
    var userAnswer = '';
    var numCorrect = 0;
    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
//compare user's choice to the correct answer
        if(userAnswer===questions[i].correctAnswer){
//add score and mark the answer green for correct selection
            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        }
//otherwise show red and don't add score
        else{
            answerContainers[i].style.color = 'red';
		}
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
//click on submit button to show results and final score
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
  }