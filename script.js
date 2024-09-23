document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    const progressBar = document.querySelector('.progress');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        resetProgressBar();
    }

    function resetProgressBar() {
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 10); 
    }

    function changeImage(step) {
        currentIndex = (currentIndex + step + totalImages) % totalImages;
        showImage(currentIndex);
    }

    prevBtn.addEventListener('click', () => changeImage(-1));
    nextBtn.addEventListener('click', () => changeImage(1));

    setInterval(() => changeImage(1), 3000);

    resetProgressBar();
});
