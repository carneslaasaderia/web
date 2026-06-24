let friendIndex = 0;
let corteIndex = 0;

/* ===================================== */
/* FUNCION GENERAL PARA MOVER SLIDERS */
/* ===================================== */

function updateSlider(trackId, selector, index){

    const track = document.getElementById(trackId);
    const cards = document.querySelectorAll(selector);

    if(!track || cards.length === 0){
        return;
    }

    cards.forEach(card=>{
        card.classList.remove('active');
    });

    cards[index].classList.add('active');

    const cardWidth = cards[0].offsetWidth;

    track.style.transform =
        `translateX(-${index * cardWidth}px)`;
}

/* ===================================== */
/* FRIENDS */
/* ===================================== */

function moveFriends(direction){

    const cards =
        document.querySelectorAll('.friend-slide');

    if(cards.length === 0){
        return;
    }

    friendIndex += direction;

    if(friendIndex < 0){
        friendIndex = cards.length - 1;
    }

    if(friendIndex >= cards.length){
        friendIndex = 0;
    }

    updateSlider(
        'friendsTrack',
        '.friend-slide',
        friendIndex
    );
}

/* ===================================== */
/* CORTES */
/* ===================================== */

function moveCortes(direction){

    const cards =
        document.querySelectorAll('.corte-slide');

    if(cards.length === 0){
        return;
    }

    corteIndex += direction;

    if(corteIndex < 0){
        corteIndex = cards.length - 1;
    }

    if(corteIndex >= cards.length){
        corteIndex = 0;
    }

    updateSlider(
        'cortesTrack',
        '.corte-slide',
        corteIndex
    );
}

/* ===================================== */
/* INICIALIZACION */
/* ===================================== */

document.addEventListener('DOMContentLoaded',()=>{

    updateSlider(
        'friendsTrack',
        '.friend-slide',
        0
    );

    updateSlider(
        'cortesTrack',
        '.corte-slide',
        0
    );

    setInterval(()=>{

        moveFriends(1);

    },4000);

    setInterval(()=>{

        moveCortes(1);

    },5000);

});