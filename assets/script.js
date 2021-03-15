// Declares variables for the functions
var score = 0;
var currentQuestion = -1;
var timeLeft;
var timer;
// Declare an array with objects containing questions, options, and correct answer.
var questions = [{
    question: 'Who created Bootstrap?',
    options: ["Google", "Facebook", "Twitter", "Mozilla"],
    answer: 'Twitter'
},
{
    question: 'Commonly used data types DO NOT include which of the following?',
    options: ["Strings", "Boolean", "Alerts", "Numbers"],
    answer: 'Alerts'
},
{
    question: 'The condition in an if / else statement is enclosed in which of the following?',
    options: ["Parenthesis ()", "Brackets []", "Curly Brackets {}", "Quotes"],
    answer: 'Parenthesis ()'
},
{
    question: 'Arrays in JavaScript can be used to contain which of the following?',
    options: ["Numbers", "Strings", "Booleans", "All of the above"],
    answer: 'All of the above'
},
{
    question: 'String variables must be enclosed in?',
    options: ["Commas", "Curly brackets", "Quotes", "Brackets"],
    answer: 'Quotes'
},]

// Creates the start function and timer
function start(){
    console.log('game started');
    timeLeft = 60;
    

    timer = setInterval(function(){
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            end(); 
        }
        document.getElementById('timeLeft').innerHTML = timeLeft;
    },1000);

    nextQuestion();
}
// Ends game by timer hitting 0
function end(){
    clearInterval(timer);
    var quiz = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /5!</h3>
    <h3>Enter your name to save your score of: ` + score  +  `!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
    document.getElementById('quiz').innerHTML = quiz;
}

// Pushes scores to local storage
function setScore(){
    localStorage.setItem('highscore', score);
    localStorage.setItem('highscoreName', document.getElementById('name').value);
    getScore();
}

// Gets score from local storage
function getScore(){
    var quiz = `<h2>` + localStorage.getItem('highscoreName') + `'s high score is:</h2>
    <h1>` + localStorage.getItem('highscore') + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="reset()">Play Again!</button>`;
    document.getElementById('quiz').innerHTML = quiz;
}

// Clears score and localstorage on button click
function clearScore(){
    localStorage.setItem('highscore','');
    localStorage.setItem('highscoreName','');
    reset();
}

// Resets the game
function reset(){
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;
    document.getElementById('timeLeft').innerHTML = timeLeft;
    location.reload();
}

// Deduct time if the answer is wrong
function incorrect(){
    timeLeft -= 5;
    nextQuestion();
}

// Increase the score if the answer is correct
function correct(){
    score += 1;
    nextQuestion();
}

// Loops through the questions
function nextQuestion(){
    currentQuestion++;
    if(currentQuestion > questions.length -1){
        end();
        return;
    }

    var quiz = '<h2>' + questions[currentQuestion].question + '</h2>';

    for (var i = 0; i < questions[currentQuestion].options.length; i++){
        var userAnswer = "<button onclick=\"[ans]\">[choice]</button>";
        userAnswer = userAnswer.replace('[choice]',questions[currentQuestion].options[i]);
        if(questions[currentQuestion].options[i] == questions[currentQuestion].answer){
            userAnswer = userAnswer.replace('[ans]', 'correct()');
        }else{
            userAnswer = userAnswer.replace('[ans]', 'incorrect()');
        }
        quiz += userAnswer;
    }
    document.getElementById('quiz').innerHTML = quiz;
}

// Adds event listners to start the game, or view high scores.
document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('highScores').addEventListener('click',getScore);