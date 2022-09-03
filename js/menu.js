const menuButton = document.getElementById("open-menu-button"),
    closeMenuButton = document.getElementById("close-menu-button"),
    menu = document.getElementById("menu");

function OpenSettingsMenu(){
    menu.style.display = "flex";
    menuButton.style.display = "none";
    closeMenuButton.style.display = "block";
}

function CloseSettingsMenu(){
    menu.style.display = "none";
    menuButton.style.display = "block";
    closeMenuButton.style.display = "none";
}

function SettingsChosen(){
    CloseSettingsMenu();
}
