
document.getElementById("startQuiz").addEventListener("click", startQuiz);

function startQuiz() {
    const operation = document.getElementById("operation").value;
    const numberOfQuestions = parseInt(document.getElementById("numberOfQuestions").value);

    let score = 0;

    document.getElementById("quiz").innerHTML = ""; // Clear previous quiz content
    document.getElementById("results").innerHTML = ""; // Clear previous results
//generate rand questions
    for (let i = 0; i < numberOfQuestions; i++) {
        const operand1 = generateRandomNumber(1, 10);
        const operand2 = generateRandomNumber(1, 10);
        const correctAnswer = calculateCorrectAnswer(operand1, operand2, operation);

        const userAnswer = prompt(`Question ${i + 1}: What is ${operand1} ${operation} ${operand2}?`);
            //checking if the answer input = calculated answer, if is correct if not own msg
        if (parseInt(userAnswer) === correctAnswer) {
            score++;
            displayResult(`Correct!`);
        } else {
            displayResult(`Incorrect. The correct answer is ${correctAnswer}`);
        }
    }       //display score

    displayResult(`Quiz completed! Your total score is ${score}`);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//calc correct answer
function calculateCorrectAnswer(operand1, operand2, operation) {
    switch (operation) {
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return 0;
    }
}
//show results
function displayResult(message) {
    const resultDiv = document.getElementById("results");
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = message;
    resultDiv.appendChild(resultParagraph);
}
