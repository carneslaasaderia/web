const slides = document.querySelectorAll('.friend-slide');

let current = 0;

function updateCarousel(){

    slides.forEach(slide=>{
        slide.classList.remove('active');
    });

    slides[current].classList.add('active');

    slides[current].scrollIntoView({
        behavior:'smooth',
        inline:'center',
        block:'nearest'
    });

}

document.querySelector('.next')
.addEventListener('click',()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    updateCarousel();

});

document.querySelector('.prev')
.addEventListener('click',()=>{

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    updateCarousel();

});

updateCarousel();