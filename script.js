// Countdown Timer
const countdownTimer = document.getElementById('countdown-timer');
const birthdayDate = new Date('June 14, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownTimer.innerHTML = "It's Bartek's Birthday!";
    }
}

setInterval(updateCountdown, 1000);

// Interactive Quiz
function startQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
}

function checkAnswer(answer, questionNumber) {
    if (answer === 'correct') {
        alert('Correct!');
    } else {
        alert('Oops! Try again.');
    }
    
    // Move to the next question
    document.getElementById(`question${questionNumber}`).style.display = 'none';
    const nextQuestion = document.getElementById(`question${questionNumber + 1}`);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}

// Surprise Button
function showSurprise() {
    document.getElementById('surprise-message').style.display = 'block';
}

// Interactive Party Game
function playGame() {
    const actions = [
        'Do a funny dance!',
        'Sing a birthday song!',
        'Tell a joke!',
        'Give a virtual high-five!',
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    document.getElementById('game-result').innerText = randomAction;
}
