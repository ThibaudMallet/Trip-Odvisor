// Executer le init du theme, de la newsletter et du slider au lancement de la page
document.addEventListener('DOMContentLoaded', init);

function init() {
    theme.init(); 
    newsletter.init();
    slider.init();
    reviews.init();
}
