// const quizBox = document.getElementById('quiz');
// const resultsBox = document.getElementById('results');
// const submitButton = document.getElementById('submit');


// function buildQuiz(){}
// function showResults(){}
// buildQuiz();
// submitButton.addEventListener('click', showResults);


// const myQuestions = [];
// for(i=0; i < data.length; i++){
// myQuestions.push(data[i]);
// }


function buildQuiz(){
    const output = [];
    myQuestions.forEach(
    (currentQuestion, questionNumber) => {
    const answers = [];
    for(letter in currentQuestion.answers){
    answers.push(
    `<label><input type="radio" name="question${questionNumber}"
    value="${letter}" class="rad_butn">
    ${letter} :
    ${currentQuestion.answers[letter]}
    </label>`
    );
    }
    output.push(
    `<div class="slide">
    <div class="question"> ${(questionNumber+1)}.
    ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>
    </div>`
    );
    }
    );
    quizBox.innerHTML = output.join('');
    }
    
function showResults(){}
const quizBox = document.getElementById('quiz');
const resultsBox = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [];
for(i=0; i < data.length; i++){
myQuestions.push(data[i]);
}
buildQuiz();
submitButton.addEventListener('click', showResults);