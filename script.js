document.addEventListener('DOMContentLoaded', function () { const filosofosSection = document.getElementById('filosofos-section'); const filosofosContent = document.querySelectorAll('.filosofos');

function checkVisibility() {
    const rect = filosofosSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        filosofosSection.style.opacity = '1';
        filosofosSection.style.transform = 'translateY(0)';
    } else {
        filosofosSection.style.opacity = '0';
        filosofosSection.style.transform = 'translateY(20px)';
    }
}

filosofosSection.style.opacity = '0';
filosofosSection.style.transform = 'translateY(20px)';
filosofosSection.style.transition = 'opacity 1s ease, transform 1s ease';

window.addEventListener('scroll', checkVisibility);
checkVisibility();

let currentFilosofo = 0;

function showFilosofo(index) {
    filosofosContent.forEach((filosofo, i) => {
        filosofo.classList.toggle('active', i === index);
    });
}

function nextFilosofo() {
    currentFilosofo = (currentFilosofo + 1) % filosofosContent.length;
    showFilosofo(currentFilosofo);
}

function previousFilosofo() {
    currentFilosofo = (currentFilosofo - 1 + filosofosContent.length) % filosofosContent.length;
    showFilosofo(currentFilosofo);
}

showFilosofo(currentFilosofo);

document.querySelector('.nav-buttons button:first-child').addEventListener('click', previousFilosofo);
document.querySelector('.nav-buttons button:last-child').addEventListener('click', nextFilosofo);

function createSyncedSliders(sliderIds, interval = 3000) {
    const sliders = sliderIds.map(id => document.getElementById(id));
    const images = sliders.map(slider => slider.querySelectorAll('img'));
    let currentImage = 0;

    function showImage(index) {
        images.forEach(sliderImages => {
            sliderImages.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images[0].length;
        showImage(currentImage);
    }

    showImage(currentImage);
    setInterval(nextImage, interval);
}

createSyncedSliders(['image-slider1', 'image-slider2'], 3000);

});

