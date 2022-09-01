var words3 = ["hey", "now", "bow"],
    words4 = [],
    words5 = [],
    words6 = [],
    words7 = [],
    letter,
    correctLetter = false,
    wrongGuessCounter = 0,
    correctGuessCounter = 0,
    guessedLetters = [],
    gameStart = false;
    
const correctLettersDiv = document.getElementById("correct-letters")

function StartGame() {
    EndGame();
    gameStart = true;
    word = words3[Math.floor(Math.random() * words3.length)];
    console.log(word)

    correctLetter = false;
    wrongGuessCounter = 0;
    correctGuessCounter = 0;
    guessedLetters = [];
    
    for(i = 0; i < word.length; i++){
        eval("var line" + i + "= document.createElement(\"div\");");
        eval("line" + i).classList.add("underline");
        correctLettersDiv.appendChild(eval("line" + i));
        console.log("running", i)
    }
}

function CheckCorrectGuess(){

    var underlined = document.getElementsByClassName("underline");

    for(i=0; i < word.length; i++) {

        if(letter == word[i]){

            console.log("correct letter")
            console.log("position", i)
            correctGuessCounter++;
            correctLetter = true;

            underlined[i].innerHTML = letter;
        }
    }
}

function EndGame(){

    console.log("game over")

    var correctLetterDivs = document.getElementsByClassName("underline");
    deleteNumber = correctLetterDivs.length;
    console.log(correctLetterDivs.length);

    for(i = 0; i < deleteNumber; i++){
        correctLetterDivs[0].remove();
        console.log("deleting line", i);
    }

    gameStart = false;
}

function GuessLetter(event) {

    if(gameStart == true){

        letter = (event.target.innerHTML)

        if(guessedLetters.includes(letter) == false){

            CheckCorrectGuess();

            if (correctLetter == false) {
                console.log("The letter", letter ,"is not in the word");
                wrongGuessCounter++;
            }

            else {
                correctLetter = false;
            }

            guessedLetters.push(letter);
            console.log("wrong guesses:", wrongGuessCounter);
        }

        else{
            console.log("Letter", letter, "already guessed");
            console.log("wrong guesses:", wrongGuessCounter);
        }

        if(correctGuessCounter == word.length){
            EndGame();
            console.log("You WIN!!!");
        }
        
        if(wrongGuessCounter == 5) {
            EndGame();
            console.log("You lose :(");
        }
        
    }
}


