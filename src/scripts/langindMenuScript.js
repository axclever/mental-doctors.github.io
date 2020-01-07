
// Patch for menu

const mainMenuButton = document.getElementById('mainMenuButton');
const mainMenu = document.getElementById('mainMenu');
const blackBackground = document.getElementById('blackBackground');

mainMenuButton.addEventListener('click', function () {
    if (mainMenu.className.indexOf('show-menu') !== -1) {
        mainMenu.className = mainMenu.className.replace('show-menu', 'hide-menu');
        return false;
    } else if (mainMenu.className.indexOf('hide-menu') !== -1) {
        mainMenu.className = mainMenu.className.replace('hide-menu', 'show-menu');
        return false;
    } else {
        mainMenu.className += " show-menu";
    }
});



mainMenu.addEventListener('click', (e) => {
    if (e.target.tagName === "A") {
        mainMenu.className = mainMenu.className.replace("show-menu", "");
    }
});

blackBackground.addEventListener("click", ()=>{
    mainMenu.className = mainMenu.className.replace("show-menu", "");
});