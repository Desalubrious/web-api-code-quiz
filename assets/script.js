// Declares variables for the functions
var score;
var currentQuestion;
var timeLeft;
var timer;
// Declare an array with objects containing questions, options, and correct answer.
var questions = [{
    question: 'Who created Bootstrap?',
    options: ['Google','Facebook','Twitter','Mozilla'],
    answer: 'Twitter'
},
{
    question: 'Commonly used data types DO NOT include which of the following?',
    options: ['Strings','Boolean','Alerts','Numbers'],
    answer: 'Alerts'
},
{
    question: 'The condition in an if / else statement is enclosed in which of the following?',
    options: ['Parenthesis ()','Brackets []','Curly Brackets {}','Quotes ""'],
    answer: 'Parenthesis ()'
},
{
    question: 'Arrays in JavaScript can be used to contain which of the following?',
    options: ['Numbers','Strings','Booleans','All of the above'],
    answer: 'All of the above'
},
{
    question: 'String variables must be enclosed in?',
    options: ['Commas','Curly brackets','Quotes','Brackets'],
    answer: 'Quotes'
},]

// Creates the start function
function start(){
    timeLeft = 60;
    document.getElementById('#timeLeft').innerHTML = timeLeft;
}