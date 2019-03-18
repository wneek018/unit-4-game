// need a variable for working score, starting at zero
var scoreTally = 0;

// need a variable for wins, starting at zero. This increases when our scoreTally matches the randomly generated number
var wins = 0;

// need a variable for losses, starting at zero. This increases when our scoreTally is greater than the randomly generated number
var losses = 0;

// need a variable for the randomly generated number
var randomNum = "";

// this allows to show/hide our special text when someone wins or loses and resets totalscore and refreshes random numbers where needed (buttons & randomNum)
var gameOver = true;



// jQuery Ready Function waits for the document to complete loading before initiating JavaScript
$(document).ready(function () {
    resetGame();

    // when the page loads, show a random number between 19-120
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // also when the page loads, assign random numbers to each crystal (between 1-12) - these values are hidden from the user
    function crystalNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $(".btn").on("click", function () {

        if (gameOver) {
            resetGame();
        }
        // when the player clicks a gem, add that score to their scoreTally
        scoreTally = scoreTally + Number(this.value);
        $("#tally-score").html(scoreTally);

        // if the scoreTally goes over the randomNum, the player loses and their losses score increases by one
        if (scoreTally > randomNum) {
            losses++;
            $("#lossTotal").html(losses);
            $("#lost").show();
            gameOver = true;
        // if the scoreTally is equal to randomNum, the player wins the game and their wins increases by one
        } else if (scoreTally == randomNum) {
            wins++;
            $("#winTotal").html(wins);
            $("#won").show();
            gameOver = true;
        }
        // if the scoreTally is less than randomNum, the player still has a chance to win

    });

    function resetGame() {
        randomNum = randomNumber(19, 120);
        $("#randNum").html(randomNum);
        $("#crystal1").val(crystalNum(1, 12));
        $("#crystal3").val(crystalNum(1, 12));
        $("#crystal4").val(crystalNum(1, 12));
        $("#crystal2").val(crystalNum(1, 12));
        scoreTally = 0;
        $("#tally-score").html(scoreTally);
        gameOver = false;
        $("#lost").hide();
        $("#won").hide();
    }
});