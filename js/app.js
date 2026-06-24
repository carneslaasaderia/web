let friendIndex = 0;
let corteIndex = 0;

function centerCard(track, card){

    const cardCenter =
        card.offsetLeft +
        (card.offsetWidth / 2);

    const scrollPosition =
        cardCenter -
        (track.clientWidth / 2);

    track.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior:'smooth'
    });
}

function updateFriends(){

    const track =
        document.getElementById('friendsTrack');

    const cards =
        document.querySelectorAll('.friend-slide');

    cards.forEach(card=>{
        card.classList.remove('active');
    });

    cards[friendIndex].classList.add('active');

    centerCard(track, cards[friendIndex]);
}

function updateCortes(){

    const track =
        document.getElementById('cortesTrack');

    const cards =
        document.querySelectorAll('.corte-slide');

    cards.forEach(card=>{
        card.classList.remove('active');
    });

    cards[corteIndex].classList.add('active');

    centerCard(track, cards[corteIndex]);
}

function moveFriends(direction){

    const cards =
        document.querySelectorAll('.friend-slide');

    friendIndex += direction;

    if(friendIndex < 0){
        friendIndex = cards.length - 1;
    }

    if(friendIndex >= cards.length){
        friendIndex = 0;
    }

    updateFriends();
}

function moveCortes(direction){

    const cards =
        document.querySelectorAll('.corte-slide');

    corteIndex += direction;

    if(corteIndex < 0){
        corteIndex = cards.length - 1;
    }

    if(corteIndex >= cards.length){
        corteIndex = 0;
    }

    updateCortes();
}

document.addEventListener('DOMContentLoaded',()=>{

    updateFriends();
    updateCortes();

});