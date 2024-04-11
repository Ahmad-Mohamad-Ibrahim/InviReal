let nextDom = document.getElementById('next');
let sliderList = document.querySelector('.slider-list');
let sliderItemsDom = sliderList.querySelectorAll('.slider-item');
let pos = 0;
let movedBy = 500;
let maxMoved = movedBy * (sliderItemsDom.length) ;
sliderList.appendChild(sliderItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

function nextSlider() {
    // let sliderItemsDom = sliderList.querySelectorAll('.slider-item');

    // sliderList.appendChild(sliderItemsDom[0]);
    if(pos >= maxMoved)
        pos = 0;
    pos += movedBy;
    sliderList.style.transform = `translateX(${-pos}px)`

    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(() => {
    //     carouselDom.classList.remove('next');
    //     carouselDom.classList.remove('prev');
    // }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


nextDom.addEventListener('click' , () => {
    nextSlider();
})