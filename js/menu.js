const menuButton = document.getElementById("open-menu-button"),
    closeMenuButton = document.getElementById("close-menu-button"),
    menu = document.getElementById("menu"),
    wordLengthSlider = document.getElementById("word-length-slider"),
    wordLengthHeader = document.getElementById("word-length-header");

var wordLength, 
    settingsOpen = false,
    currentWordLength = 3,
    wordLength = 3;

wordLengthSlider.value = 3;

function OpenSettingsMenu(){
    settingsOpen = true;
    menu.style.display = "flex";
    menuButton.style.display = "none";
    closeMenuButton.style.display = "block";
}

function CloseSettingsMenu(){
    settingsOpen = false;
    menu.style.display = "none";
    menuButton.style.display = "block";
    closeMenuButton.style.display = "none";
}

function SettingsChosen(){
    wordLength = wordLengthSlider.value;
    console.log(wordLength);
    SliderInput();
    CloseSettingsMenu();
}

function SliderInput(){
    wordLength = parseInt(wordLengthSlider.value);
    currentWordLength = parseInt(wordLengthHeader.innerHTML.replace(/\D/g, ""));

    if(wordLength !== currentWordLength){
        wordLengthHeader.innerHTML = "Word Length: " + wordLength + " Letters";
    }
}

wordLengthSlider.oninput = SliderInput;