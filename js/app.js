let friendIndex = 0;

function moveFriends(direction){

    const cards = document.querySelectorAll('.friend-slide');

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

    cards.forEach(card=>{
        card.classList.remove('active');
    });

    cards[friendIndex].classList.add('active');
}

/* Cambio automático Friends */

setInterval(()=>{

    moveFriends(1);

},4000);


/* ===================================== */
/* CARRUSEL CORTES */
/* ===================================== */

let corteIndex = 0;

function moveCortes(direction){

    const cards = document.querySelectorAll('.corte-slide');

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

    cards.forEach(card=>{
        card.classList.remove('active');
    });

    cards[corteIndex].classList.add('active');
}

/* Cambio automático Cortes */

setInterval(()=>{

    moveCortes(1);

},5000);


/* Inicializar */

document.addEventListener('DOMContentLoaded', () => {

    const friendCards = document.querySelectorAll('.friend-slide');

    if(friendCards.length > 0){
        friendCards[0].classList.add('active');
    }

    const corteCards = document.querySelectorAll('.corte-slide');

    if(corteCards.length > 0){
        corteCards[0].classList.add('active');
    }

});