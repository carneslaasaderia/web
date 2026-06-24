let friendIndex = 0;
let corteIndex = 0;

/* ===================================== */
/* FRIENDS */
/* ===================================== */

function updateFriends() {

    const track = document.getElementById('friendsTrack');
    const cards = document.querySelectorAll('.friend-slide');

    if (!track || cards.length === 0) {
        return;
    }

    cards.forEach(card => {
        card.classList.remove('active');
    });

    cards[friendIndex].classList.add('active');

    track.scrollTo({
        left:
            cards[friendIndex].offsetLeft -
            (track.clientWidth / 2) +
            (cards[friendIndex].clientWidth / 2),
        behavior: 'smooth'
    });
}

function moveFriends(direction) {

    const cards = document.querySelectorAll('.friend-slide');

    if (cards.length === 0) {
        return;
    }

    friendIndex += direction;

    if (friendIndex < 0) {
        friendIndex = cards.length - 1;
    }

    if (friendIndex >= cards.length) {
        friendIndex = 0;
    }

    updateFriends();
}

/* ===================================== */
/* CORTES */
/* ===================================== */

function updateCortes() {

    const track = document.getElementById('cortesTrack');
    const cards = document.querySelectorAll('.corte-slide');

    if (!track || cards.length === 0) {
        return;
    }

    cards.forEach(card => {
        card.classList.remove('active');
    });

    cards[corteIndex].classList.add('active');

    track.scrollTo({
        left:
            cards[corteIndex].offsetLeft -
            (track.clientWidth / 2) +
            (cards[corteIndex].clientWidth / 2),
        behavior: 'smooth'
    });
}

function moveCortes(direction) {

    const cards = document.querySelectorAll('.corte-slide');

    if (cards.length === 0) {
        return;
    }

    corteIndex += direction;

    if (corteIndex < 0) {
        corteIndex = cards.length - 1;
    }

    if (corteIndex >= cards.length) {
        corteIndex = 0;
    }

    updateCortes();
}

/* ===================================== */
/* INICIALIZACIÓN */
/* ===================================== */

document.addEventListener('DOMContentLoaded', () => {

    updateFriends();
    updateCortes();

    setInterval(() => {
        moveFriends(1);
    }, 4000);

    setInterval(() => {
        moveCortes(1);
    }, 5000);

});