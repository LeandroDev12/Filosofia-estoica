document.addEventListener('DOMContentLoaded', function () {
    // Função para verificar a visibilidade da seção de filósofos
    const filosofosSection = document.getElementById('filosofos-section');
    const filosofosContent = document.querySelectorAll('.filosofos');

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

    // Configurações iniciais da seção de filósofos
    filosofosSection.style.opacity = '0';
    filosofosSection.style.transform = 'translateY(20px)';
    filosofosSection.style.transition = 'opacity 1s ease, transform 1s ease';

    // Verifica a visibilidade ao rolar a página
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Controle dos filósofos (navegação entre eles)
    let currentFilosofo = 0;

    function showFilosofo(index) {
        filosofosContent.forEach((filosofo, i) => {
            if (i === index) {
                filosofo.classList.add('active');
            } else {
                filosofo.classList.remove('active');
            }
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

    // Mostra o primeiro filósofo ao carregar a página
    showFilosofo(currentFilosofo);

    // Adiciona eventos de clique aos botões de navegação
    document.querySelector('.nav-buttons button:first-child').addEventListener('click', previousFilosofo);
    document.querySelector('.nav-buttons button:last-child').addEventListener('click', nextFilosofo);

    // Função para criar sliders de imagens sincronizados
    function createSyncedSliders(sliderIds, interval = 3000) {
        const sliders = sliderIds.map(id => document.getElementById(id));
        const images = sliders.map(slider => slider.querySelectorAll('img'));
        let currentImage = 0;

        function showImage(index) {
            images.forEach((sliderImages, sliderIndex) => {
                sliderImages.forEach((img, i) => {
                    if (i === index) {
                        img.classList.add('active');
                    } else {
                        img.classList.remove('active');
                    }
                });
            });
        }

        function nextImage() {
            currentImage = (currentImage + 1) % images[0].length; // Usa o número de imagens do primeiro slider como referência
            showImage(currentImage);
        }

        // Mostra a primeira imagem ao carregar
        showImage(currentImage);

        // Inicia o intervalo para troca automática de imagens
        setInterval(nextImage, interval);
    }

    // Cria os sliders de imagens sincronizados
    createSyncedSliders(['image-slider1', 'image-slider2'], 3000); // Ambos trocam a cada 3 segundos
});