const slidesArray = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;

function updateSliderPosition() {
    const offSet = -currentIndex * 100;
    slider.style.transform = `translateX(${offSet}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesArray.length;
    updateSliderPosition();
})

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
    updateSliderPosition();
})

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slidesArray.length;
        updateSliderPosition();
    }, 6000)
})