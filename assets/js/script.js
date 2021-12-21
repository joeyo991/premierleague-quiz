function runQuiz() {

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let question9 = document.quiz.question9.value;
    let question10 = document.quiz.question10.value;
    let correct = 0;

    if (question1 == "alan-shearer") {
        correct++;
    }
    if (question2 == "manchester-united") {
        correct++;
    }
    if (question3 == "ryan-giggs") {
        correct++;
    }
    if (question4 == "seven") {
        correct++;
    }
    if (question5 == "one-hundred") {
        correct++;
    }
    if (question6 == "gareth-barry") {
        correct++;
    }
    if (question7 == "ninety-two") {
        correct++;
    }
    if (question8 == "marcus-bent") {
        correct++;
    }
    if (question9 == "frank-lampard") {
        correct++;
    }
    if (question10 == "brian-deane") {
        correct++;
    }

    document.getElementById("result").style.visibility = "visible";
    document.getElementById("correct-answers").innerHTML = "You got " + correct + " answers correct."

}