// Create Two Random Numbers Between 1 and 6 //
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Call Function when Replay Button


//Show Dice Image #1 to 6 Depending on the Random Number //
function randomDice() {
    // Dice 1 //
    if (randomNumber1 == 1) {
        document.getElementById('img1').setAttribute('src', 'images/dice1.png');
    } else if (randomNumber1 == 2) {
        document.getElementById('img1').setAttribute('src', 'images/dice2.png');
    } else if (randomNumber1 == 3) {
        document.getElementById('img1').setAttribute('src', 'images/dice3.png');
    } else if (randomNumber1 == 4) {
        document.getElementById('img1').setAttribute('src', 'images/dice4.png');
    } else if (randomNumber1 == 5) {
        document.getElementById('img1').setAttribute('src', 'images/dice5.png');
    } else if (randomNumber1 == 6) {
        document.getElementById('img1').setAttribute('src', 'images/dice6.png');
    }
    // Dice 2 //
    if (randomNumber2 == 1) {
        document.getElementById('img2').setAttribute('src', 'images/dice1.png');
    } else if (randomNumber2 == 2) {
        document.getElementById('img2').setAttribute('src', 'images/dice2.png');
    } else if (randomNumber2 == 3) {
        document.getElementById('img2').setAttribute('src', 'images/dice3.png');
    } else if (randomNumber2 == 4) {
        document.getElementById('img2').setAttribute('src', 'images/dice4.png');
    } else if (randomNumber2 == 5) {
        document.getElementById('img2').setAttribute('src', 'images/dice5.png');
    } else if (randomNumber2 == 6) {
        document.getElementById('img2').setAttribute('src', 'images/dice6.png');
    } 
    return winner();
    

    }

    // Show Winner //
    function winner() {
        if (randomNumber1 > randomNumber2) {
            document.getElementById('win').innerHTML = "Player 1 Win's!";
        } else if (randomNumber2 > randomNumber1) {
            document.getElementById('win').innerHTML = "Player 2 Win's!";
        } else if (randomNumber1 == randomNumber2) {
            document.getElementById('win').innerHTML = "Draw";
        }
    }

