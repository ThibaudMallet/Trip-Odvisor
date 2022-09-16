const slider = {
    init: function() {
        const previousImage = document.getElementById('previousButton');
        previousImage.addEventListener('click', slider.goPreviousImage);

        const nextImage = document.getElementById('nextButton');
        nextImage.addEventListener('click', slider.goNextImage);

        slider.addImagesToSlider();
    },
    addImagesToSlider: function() {
        const images = document.getElementsByClassName('card__image');
        const sliderElement = document.querySelector('section.slider');
        for (let index = 0; index < images.length; index++) {
        const imgElement = document.createElement('img');
        if (index == 0) {
            imgElement.className = 'slider__img slider__img--current';
        } else {
            imgElement.className = 'slider__img';
        }
        imgElement.src = images[index].src;
        sliderElement.append(imgElement);
        }
    },
    goNextImage: function() {
        const currentImage = document.querySelector('.slider__img--current');
        const nextImg = currentImage.nextElementSibling;
        if (nextImg) {
            currentImage.classList.remove('slider__img--current');
            nextImg.classList.add('slider__img--current');
        } else {
            const imgCanyon = document.querySelector('.slider > img:nth-of-type(1)');
            currentImage.classList.remove('slider__img--current');
            imgCanyon.classList.add('slider__img--current');
        }
    },
    goPreviousImage: function() {
        const currentImage = document.querySelector('.slider__img--current');
        const previousImg = currentImage.previousElementSibling;
        if (previousImg.tagName == "IMG") {
        currentImage.classList.remove('slider__img--current');
        previousImg.classList.add('slider__img--current');
        } else {
            const skiImg = document.querySelector('.slider > img:last-child');
            currentImage.classList.remove('slider__img--current');
            skiImg.classList.add('slider__img--current');        
        }
    },    
}



