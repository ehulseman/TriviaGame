//PSEUDOCODE
// 1. Display the title, instructions, and START GAME BUTTON
// 2. When user presses the START GAME button, hide the instructions and button and show the timer, questions, and DONE button
// 3. Store user's trivia answers as they select them
// 4. If timer runs out before user is finished, hide the questions and timeout and display the gameResults div to show correct answers, incorrect answers, and unanswered questions
// 5. If user finishes game before time runs out, they can press the DONE button and we will display the gameResults div

var timerSeconds = 120;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 4;

$(document).ready(function () {
    console.log("Ready!");

    //Start off by having the trivia-Questions, game-Results, Done Button, and Timer divs hidden
    hideTriviaQuestions();
    hideGameResults();
    hideDoneButton();
    hideTimer();
    hideRetryButton()

    //This is starting and stopping the timer. Start timer by pressing the START GAME button. Stop game when timer runs out OR by pressing the DONE button.
    var timer;

    $("#start-game").on("click", run);

    $("#done-game").on("click", stop);

    $("#retry-game").on("click", restart);

    function run() {
        timer = setInterval(decrement, 1000);
        showTimer();
        showTriviaQuestions();
        showDoneButton();
    }

    function decrement() {
        timerSeconds--;
        $("#timeLeft").html(timerSeconds);

        if (timerSeconds === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(timer);
        timerSeconds = 120;
        $("#timeLeft").html(timerSeconds);
        hideTimer();
        hideTriviaQuestions();
        hideDoneButton();
        showGameResults();
        showRetryButton();
        hideStartButton();
    }

    function restart() {
        timer = setInterval(decrement, 1000);
        resetQuestions();
        resetGameResults();
        showTimer();
        showTriviaQuestions();
        showDoneButton();
        hideGameResults();
        hideRetryButton();
    }

    function showTriviaQuestions() {
        $("#trivia-Questions").show();
    }

    function showGameResults() {
        $("#game-Results").show();
    }

    function showTimer() {
        $("#timer").show();
    }

    function showDoneButton() {
        $("#done").show();
    }

    function hideTriviaQuestions() {
        $("#trivia-Questions").hide();
    }

    function hideGameResults() {
        $("#game-Results").hide();
    }

    function hideDoneButton() {
        $("#done").hide();
    }

    function hideRetryButton() {
        $("#retry").hide();
    }

    function showRetryButton() {
        $("#retry").show();
    }

    function hideStartButton() {
        $("#start").hide();
    }

    function hideTimer() {
        $("#timer").hide();
    }

    function resetQuestions() {
        document.getElementsByClassName("formFields")[0].reset();
        document.getElementsByClassName("formFields")[1].reset();
        document.getElementsByClassName("formFields")[2].reset();
        document.getElementsByClassName("formFields")[3].reset();
    }

    function resetGameResults() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 4;
    }

    //Now we want to capture correct answers, incorrect inputs and unanswered questions
    $(function () {

        $('.questions input[type="radio"]').click(function () {

            var type = $(this).data('type'),
                correctAnswerCount =
                $('.questions input[type="radio"]:checked[data-type="1"]').length;

            if (type === 1) {
                correctAnswers++;
                unanswered = unanswered - 1;
                $("#correctAnswers").html(correctAnswers);
                $("#unansweredQuestions").html(unanswered);
            } else if (type === 0) {
                incorrectAnswers++;
                unanswered = unanswered - 1;
                $("#incorrectAnswers").html(incorrectAnswers);
                $("#unansweredQuestions").html(unanswered);
            }
        });

    });

});