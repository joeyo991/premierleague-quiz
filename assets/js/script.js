/**
 * Runs the quiz when the 'finish' button is clicked.
 */
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

    //Checks  if the user's answer is correct.
    //If it is, the answer will be green. If it's not, it will be red.
    //Each correct answer is counted and displayed.
    if (question1 == "alan-shearer") {
        document.getElementById("answer-one").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-one").style.color = "red";
    }
    if (question2 == "manchester-united") {
        document.getElementById("answer-two").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-two").style.color = "red";
    }
    if (question3 == "ryan-giggs") {
        document.getElementById("answer-three").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-three").style.color = "red";
    }
    if (question4 == "seven") {
        document.getElementById("answer-four").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-four").style.color = "red";
    }
    if (question5 == "one-hundred") {
        document.getElementById("answer-five").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-five").style.color = "red";
    }
    if (question6 == "gareth-barry") {
        document.getElementById("answer-six").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-six").style.color = "red";
    }
    if (question7 == "ninety-two") {
        document.getElementById("answer-seven").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-seven").style.color = "red";
    }
    if (question8 == "marcus-bent") {
        document.getElementById("answer-eight").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-eight").style.color = "red";
    }
    if (question9 == "frank-lampard") {
        document.getElementById("answer-nine").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-nine").style.color = "red";
    }
    if (question10 == "brian-deane") {
        document.getElementById("answer-ten").style.color = "green";
        correct++;
    } else {
        document.getElementById("answer-ten").style.color = "red";
    }

    //Score arrays to display a message and a gif depending on the user's score.
    let messages = ["Relegation", "Mid Table", "Top Four", "Premier League Winner!"];
    let gifs = ["assets/images/relegation.gif", "assets/images/mid-table.gif", "assets/images/top-four.gif", "assets/images/winner.gif"];
    let score;

    if (correct <= 3) {
        score = 0;
    }
    if (correct > 3 && correct <= 6) {
        score = 1;
    }
    if (correct > 6 && correct <= 9) {
        score = 2;
    }
    if (correct == 10) {
        score = 3;
    }

    //Makes the result div visible when the quiz is complete.
    document.getElementById("result-div").style.display = "block";

    //Shows the message based on the users score.
    document.getElementById("message").innerHTML = messages[score];
    //Shows the user how many answers they got correct.
    document.getElementById("correct-answers").innerHTML = `You got ${correct} answers correct.`;
    //Shows a gif based on the users score.
    document.getElementById("gif").src = gifs[score];
    //document.getElementById("answers-header").innerHTML = "Answers";
}

function showQ1() {
    document.getElementById("q1").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}
function showQ2() {
    document.getElementById("q2").style.display = "block";
    document.getElementById("q1").style.display = "none";
}
