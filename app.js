const correctAnswers = ['B', 'A', 'C', 'C', 'A', 'A'];

const form = document.querySelector('.quiz-container');
const quizTitle = document.querySelector('.quiz-title');
const endMessage = document.querySelector('.end-message');
const innerMessage = document.querySelector('.inner-message')
const playAgainBtn = document.querySelector('.play-again-button');
const green = document.querySelectorAll('.green')

//---------------------------------------------------------------


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.answer1.value, form.answer2.value, form.answer3.value, form.answer4.value, form.answer5.value, form.answer6.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += Math.round(100 / 6);
            if (score > 100) {
                score = 100
            }
        } else {
            score
        }
    });

    quizTitle.classList.add('hidden');
    endMessage.classList.remove('hidden');
    innerMessage.textContent = `${ score }% Correct answers!`;
    green.forEach((answer) => {
        answer.style.color = 'greenyellow';
    });

    scrollTo(top);

    playAgainBtn.addEventListener('click', () => {
        location.reload();
    });
});





