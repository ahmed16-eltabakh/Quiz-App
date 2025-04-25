const questions = [
    {
        question: "Which is larget animal in the world?",
        answer: [
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },

    {
        question: "Which is larget in the world?",
        answer: [
            {text: "shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Blue Whale", correct: true}
        ]
    },

    {
        question: "Which is larget animal the world?",
        answer: [
            {text: "Blue Whale", correct: true},
            {text: "shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },

    {
        question: "Which larget animal in the world?",
        answer: [
            {text: "shark", correct: false},
            {text: "Elephant", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Giraffe", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswers);
    });
};


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
};


function selectAnswers(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    };
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        };
        button.disabled = true;
    });
    nextButton.style.display = "block";
};


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML = "Test Again";
    nextButton.style.display = "block";
};


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    };
};




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    };
});

startQuiz();



//* Colors Part
document.body.style.backgroundColor = "#3e5d75";
document.querySelector(".app").style.backgroundColor = "#213448";























