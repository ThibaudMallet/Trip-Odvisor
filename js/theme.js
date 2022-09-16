const theme = {
    init: function() {
        // On selectionne le bouton lune et on le rend clickable
        const moonButton = document.getElementById('theme-switch');
        moonButton.addEventListener('click', theme.changeTheme);

        // Selection des boutons de theme et mise en place de l'écouteur dessus
        const themeButton = document.querySelectorAll('.theme-button');
        for (button of themeButton) {
            button.addEventListener('click', theme.handleThemeColorClick)
        };
        // On recupère la valeur enregistrée dans le localStorage pour remettre le dernier thème à l'initialisation
        const isDarkModeActivatedAsString = localStorage.getItem('isDarkMode');
        // Convertir l'info en booléen pour pouvoir s'en servir
        const isDarkModeActivated = JSON.parse(isDarkModeActivatedAsString);
        // Adapter l'affichage par rapport à l'info
        if (isDarkModeActivated !== null) {
            if (isDarkModeActivated) {
                document.querySelector('body').classList.add('theme-dark');
            }
        }
        
        const colorTheme = localStorage.getItem('colorTheme');

        if (colorTheme !== null) {
            theme.changeColorTheme(colorTheme);
        }

    },
    changeTheme: function() {
        // On sélectionne le body pour pouvoir switcher le theme dark dessus par rapport au click du button moonButton
        const bodyElement = document.querySelector('body');
        if (bodyElement.classList.contains('theme-dark')) {
        bodyElement.classList.remove('theme-dark');
        } else {
        bodyElement.classList.add('theme-dark');
        }

        // On détermine si le mode sombre est activé ou non
        const isDarkMode = bodyElement.classList.contains('theme-dark');

        // On veut stocker ce booléén dans le localStorage
        // On doit donc le convertir en chaine de caractère
        const isDarkModeActivatedStringified = JSON.stringify(isDarkMode);
        // On peut maintenant l'enregistrer dans le localStorage
        localStorage.setItem('isDarkMode', isDarkModeActivatedStringified);
    },
    handleThemeColorClick: function(event) {
            const currentButton = event.currentTarget;
            const buttonId = currentButton.getAttribute("id");

            theme.changeColorTheme(buttonId);

            localStorage.setItem('colorTheme', buttonId);
    },
    changeColorTheme: function(colorTheme) {
        const bodyElement = document.querySelector('body');
        bodyElement.classList.add(colorTheme);
        if (colorTheme != 'theme-red') {
            bodyElement.classList.remove('theme-red');
        }
        if (colorTheme != 'theme-green') {
            bodyElement.classList.remove('theme-green');
        }
        if (colorTheme != 'theme-blue') {
            bodyElement.classList.remove('theme-blue');
        }
        const logoImage = document.querySelector('.logo__image');
        logoImage.src = 'img/logo-' + colorTheme + '.png'; 
    }
    
}


