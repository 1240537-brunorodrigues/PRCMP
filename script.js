// script.js

let availableQuestions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 20;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

// Função para iniciar o quiz
function startQuiz() {
    startScreen.style.display = 'none';
    endScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    score = 0;
    currentQuestionIndex = 0;

    // Seleciona 20 perguntas aleatórias
    availableQuestions = [...questions];
    selectedQuestions = getRandomQuestions(availableQuestions, TOTAL_QUESTIONS);

    loadQuestion();
}

// Função para selecionar um número específico de perguntas aleatórias
function getRandomQuestions(questionArray, num) {
    const shuffled = questionArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(num, questionArray.length));
}

// Função para carregar a pergunta atual
function loadQuestion() {
    feedbackEl.innerHTML = '';
    nextBtn.style.display = 'none';

    if (currentQuestionIndex >= selectedQuestions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionEl.innerHTML = `Questão ${currentQuestionIndex + 1} de ${TOTAL_QUESTIONS}: ${currentQuestion.question}`;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsEl.appendChild(button);
    });
}

// Função para selecionar uma opção
function selectOption(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
        feedbackEl.style.color = 'green';
        feedbackEl.innerHTML = 'Correto!';
        score++;
    } else {
        feedbackEl.style.color = 'red';
        feedbackEl.innerHTML = `Errado! A resposta correta é: ${currentQuestion.answer}`;
    }

    // Desabilita todas as opções após seleção
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(button => {
        button.disabled = true;
        if (button.innerText === currentQuestion.answer) {
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';
        } else if (button.innerText === selectedOption) {
            button.style.backgroundColor = '#f44336';
            button.style.color = 'white';
        }
    });

    currentQuestionIndex++;
    nextBtn.style.display = 'block';
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    loadQuestion();
}

// Função para finalizar o quiz
function endQuiz() {
    quizScreen.style.display = 'none';
    endScreen.style.display = 'block';
    scoreEl.innerHTML = `Nota: ${score} valores.`;
}

// Função para reiniciar o quiz
function restartQuiz() {
    startQuiz();
}

// Eventos
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);