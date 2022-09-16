const newsletter = {
    forbiddenDomains: [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],
    newsletterOn: null,
    init: function() {
        const newsletterOpen = document.getElementById('newsletterOn');
        newsletterOpen.addEventListener('click', newsletter.newsletterOpen);

        const newsletterClose = document.querySelector('.newsletter__close');
        newsletterClose.addEventListener('click', newsletter.newsletterClose);

        const formNewsletter = document.querySelector('#formNewsletter');
        formNewsletter.addEventListener('submit', newsletter.submitForm);

        newsletter.newsletterOn = document.querySelector('.newsletter');
    },
    newsletterOpen: function(event) {
        event.preventDefault();
        newsletter.newsletterOn.classList.add('newsletter--on');
    },
    newsletterClose: function() {
        newsletter.newsletterOn.classList.remove('newsletter--on');
    },
    submitForm: function(event) {
        event.preventDefault();
    
        const inputNewsletter = document.querySelector('.newsletter__field');
    
        const inputNewsletterValue = inputNewsletter.value;
    
        for (let index = 0; index < newsletter.forbiddenDomains.length; index++) {
            if (inputNewsletterValue.includes(newsletter.forbiddenDomains[index])) {
                const pElement = document.createElement('p');
    
                pElement.textContent = 'Les adresses jetables ne sont pas admises';
    
                pElement.className = 'message';
    
                newsletter.newsletterOn.append(pElement);
            }
    
        inputNewsletter.value = "";
        }
    }
    
    
}