//PSEUDOCODE
// 1. Display the title, instructions, and START GAME BUTTON
// 2. When user presses the START GAME button, hide the instructions and button and show the timer, questions, and DONE button
// 3. Store user's trivia answers as they select them
// 4. If timer runs out before user is finished, hide the questions and timeout and display the gameResults div to show correct answers, incorrect answers, and unanswered questions
// 5. If user finishes game before time runs out, they can press the DONE button and we will display the gameResults div

var timerSeconds = 10;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var totalQuestions = 4;

$(document).ready(function () {
    console.log("Ready!");

    //Start off by having the trivia-Questions, game-Results, Done Button, and Timer divs hidden
    hideTriviaQuestions();
    hideGameResults();
    hideDoneButton();
    hideTimer();

    //This is starting and stopping the timer. Start timer by pressing the START GAME button. Stop game when timer runs out OR by pressing the DONE button.
    var timer;

    $("#start-game").on("click", run);

    $("#done-game").on("click", stop);

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
        timerSeconds = 10;
        $("#timeLeft").html(timerSeconds);
        hideTimer();
        hideTriviaQuestions();
        hideDoneButton();
        showGameResults();
    }

    function resetTriviaQuestions() {
        document.getElementById("#trivia-Questions").reset();
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
        $("#done-game").show();
    }

    function hideTriviaQuestions() {
        $("#trivia-Questions").hide();
    }

    function hideGameResults() {
        $("#game-Results").hide();
    }

    function hideDoneButton() {
        $("#done-game").hide();
    }

    function hideTimer() {
        $("#timer").hide();
    }

    // function unansweredQuestionsTotal () {
    //     totalQuestions - (correctAnswers + incorrectAnswers) = []
    // }

    //Now we want to capture correct answers, incorrect inputs and unanswered questions
    // $(function () {

    //     $('.questions input[type="radio"]').click(function () {

    //         var type = $(this).data('type'),
    //             correctAnswerCount =
    //             $('.questions input[type="radio"]:checked[data-type="1"]').length;

    //         alert(type === 1 ? 'Correct' : 'Wrong');
    //     });

    // });

    //Now we want to capture correct answers, incorrect inputs and unanswered questions
    $(function () {

        $('.questions input[type="radio"]').click(function () {

            var type = $(this).data('type'),
                correctAnswerCount =
                $('.questions input[type="radio"]:checked[data-type="1"]').length;

            if (type === 1) {
                correctAnswers++;
                $("#correctAnswers").html(correctAnswers);
            } else if (type === 0) {
                incorrectAnswers++;
                $("#incorrectAnswers").html(incorrectAnswers);
            } else {
                unanswered++;
                $("#unansweredQuestions").html(unanswered);
                console.log("Fired!");
            }
        });

    });

});