var letter,
    correctLetter = false,
    wrongGuessCounter = 0,
    correctGuessCounter = 0,
    guessedLetters = [],
    gameStart = false;

const correctLettersDiv = document.getElementById("correct-letters"),
    hangman = document.getElementById("hangman"),
    keyboard = document.getElementById("keyboard"),
    winMessage = document.getElementById("win-message");

function Mistake1() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','25%');
    newLine.setAttribute('y1','304px');
    newLine.setAttribute('x2','30%');
    newLine.setAttribute('y2','275px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','35%');
    newLine.setAttribute('y1','304px');
    newLine.setAttribute('x2','30%');
    newLine.setAttribute('y2','275px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake2() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','30%');
    newLine.setAttribute('y1','275px');
    newLine.setAttribute('x2','30%');
    newLine.setAttribute('y2','50px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake3() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','30%');
    newLine.setAttribute('y1','50px');
    newLine.setAttribute('x2','50%');
    newLine.setAttribute('y2','50px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','30%');
    newLine.setAttribute('y1','125px');
    newLine.setAttribute('x2','40%');
    newLine.setAttribute('y2','50px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake4() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','circle');
    newLine.setAttribute('id','circle2');
    newLine.setAttribute('r','30px');
    newLine.setAttribute('cx','50%');
    newLine.setAttribute('cy','100px');
    newLine.setAttribute('fill','none');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake5() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','128px');
    newLine.setAttribute('x2','50%');
    newLine.setAttribute('y2','254px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake6() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','175px');
    newLine.setAttribute('x2','55%');
    newLine.setAttribute('y2','160px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','175px');
    newLine.setAttribute('x2','45%');
    newLine.setAttribute('y2','160px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake7() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','254px');
    newLine.setAttribute('x2','55%');
    newLine.setAttribute('y2','304px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);

    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','254px');
    newLine.setAttribute('x2','45%');
    newLine.setAttribute('y2','308px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "4");
    hangman.append(newLine);
}

function Mistake8() {
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line2');
    newLine.setAttribute('x1','50%');
    newLine.setAttribute('y1','50px');
    newLine.setAttribute('x2','50%');
    newLine.setAttribute('y2','72px');
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "2");
    hangman.append(newLine);
}

function StartGame() {

    document.getElementById("start-button").innerHTML = "Restart";

    DeleteGuessLines();
    DeleteHangmanPicture();

    gameStart = true;
    keyboard.style.display = "block";
    winMessage.style.display = "none";

    word = eval("words" + wordLength)[Math.floor(Math.random() * eval("words" + wordLength).length)];
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

function DeleteGuessLines(){
    var correctLetterDivs = document.getElementsByClassName("underline");
    deleteNumber = correctLetterDivs.length;
    console.log(correctLetterDivs.length);

    for(i = 0; i < deleteNumber; i++){
        correctLetterDivs[0].remove();
        console.log("deleting line", i);
    }
}

function DeleteHangmanPicture(){
    var hangmanLines = document.getElementById("hangman").getElementsByTagName("line");
    var deleteLines = hangmanLines.length;
    for(i = 0; i<deleteLines; i++){
        hangmanLines[0].remove();
    }

    var hangmanCircles = document.getElementById("hangman").getElementsByTagName("circle");
    var deleteCircles = hangmanCircles.length;
    for(i = 0; i < deleteCircles; i++){
        hangmanCircles[0].remove();
    }
}

function EndGame(){
    console.log("game over")
    gameStart = false;
    document.getElementById("start-button").innerHTML = "Retry"
    keyboard.style.display = "none";
    winMessage.style.display = "block";
}

function WinGame(){
    winMessage.innerHTML = "You Win"

    EndGame();
}

function LoseGame(){
    winMessage.innerHTML = "You Lose"

    EndGame();
}

function GuessLetter(event) {

    if(gameStart == true){

        letter = (event.target.innerHTML)

        if(guessedLetters.includes(letter) == false){

            CheckCorrectGuess();

            if (correctLetter == false) {
                console.log("The letter", letter ,"is not in the word");
                wrongGuessCounter++;

                var a = eval("Mistake" + wrongGuessCounter + "()");

                eval("Mistake" + wrongGuessCounter + "()")
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
            WinGame();
            console.log("You WIN!!!");
        }
        
        if(wrongGuessCounter == 8) {
            LoseGame();
            console.log("You lose :(");
        }
        
    }
}