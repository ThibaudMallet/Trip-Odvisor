// Gestion des affichages des commentaires

// Ecouteur sur chaque input de type checkbox
// Traitement du handler :
//  - Identifier le nombre d'étoiles concernées (Mise en place du handler sur les 3 boutons, puis récupération de la valeur dans nbStars)
//  - Selectionner les commentaires qui correspondent à ce nombre d'étoiles (récuparation du de la valeur de l'input, puis selection des commentaires avec cette value)
//  - Masquer/afficher les commentaires

const reviews = {
    init: function() {
        const allCheckboxElements = document.querySelectorAll('.filter input[name="rating"]');
        for (currentCheckbox of allCheckboxElements) {
            currentCheckbox.addEventListener('click', reviews.handleClickOnFilterCheckbox);
        }
    },
    handleClickOnFilterCheckbox: function(event) {
        const nbStars = event.currentTarget.value;

        const reviewWithStar = document.querySelectorAll(`.review[data-rating="${nbStars}"]`);
        console.log(reviewWithStar);

        if (event.currentTarget.checked) {
            for (const review of reviewWithStar) {
                review.classList.remove('review--hidden');
            }
        } else {
            for (const review of reviewWithStar) {
                review.classList.add('review--hidden');
            }
        }
    }

}