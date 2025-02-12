$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 25
        }, 'slow');
    });
});
document.addEventListener("click", () => {
    let audio = document.getElementById("miAudio");
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.log("El autoplay fue bloqueado por el navegador.", error);
    });

    // Remover el evento después de la primera reproducción
    document.removeEventListener("click", arguments.callee);
});

const buttonNo = document.querySelector('.btn-no');
const buttonYes = document.querySelector('.btn-yes');
const textAlter = document.querySelector('.text-alter');

const message_alter = [
    'Estas segura? 💔',
    'Piensalo 🤔',
    'Piensalo bien 🫠',
    'Piensalo muy bien 😟',
    'Mira el otro botón 😑',
    'Dale Click al otro Botón 🙏'
];

let textOpacity = 0.7;

buttonNo.addEventListener('click', () => {
    const indexRandom = Math.floor(Math.random() * message_alter.length);
    textOpacity -= 0.1;
    buttonNo.style.opacity = textOpacity; 
    textAlter.textContent = message_alter[indexRandom];

});

let box_dad = document.querySelector('.dad');
let box_dow_flower = document.querySelector('.dow_flower');

buttonYes.addEventListener('click', () => {
    box_dad.style.display = 'none';
    box_dow_flower.style.display = 'flex';

});


onload = () => {
    const c = setTimeout(() => {
    document.querySelector(".dow_flower")?.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
}; 