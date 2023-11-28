// ! Consegna:
// ! Dato un array di oggetti letterali con:
// ! URL dell’immagine
// ! Titolo della slide
// ! Descrizione della slide
// ! Creare un carosello come nella foto allegata.
// ! Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2: Aggiungere il ciclo infinito del carosello.
// Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

const images = [
    {   image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {   image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {   image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {   image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {   image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const slidesWrapperEl = document.querySelector("#carousel-container");


let activeIndex = 0;


images.forEach((element, index) => {
    slidesWrapperEl.innerHTML += generateNewSlide(element.image, element.title, element.text, index);
    index++

});

document.querySelector('div.carousel[carousel-item="' + activeIndex + '"]').classList.add('active');

let clock;

document.querySelector('.my_button_over').addEventListener('click', function(){
    let newIndex = (activeIndex - 1 + images.length) % images.length;
    document.querySelector('div.carousel[carousel-item="' + activeIndex + '"]').classList.remove('active');
    activeIndex = newIndex;
    document.querySelector('div.carousel[carousel-item="' + activeIndex + '"]').classList.add('active');
});

document.querySelector('.my_button_under').addEventListener('click', function(){
    let newIndex = (activeIndex + 1) % images.length;
    document.querySelector('div.carousel[carousel-item="' + activeIndex + '"]').classList.remove('active');
    activeIndex = newIndex;
    document.querySelector('div.carousel[carousel-item="' + activeIndex + '"]').classList.add('active');
});



// function ============================

function generateNewSlide(imageElement, titleElement, textElement, index) {
    return `<div class="carousel" carousel-item="${index}">
                <img class="my_img" src="${imageElement}" alt="picture">
                <div class="my_container_text">
                    <h2>${titleElement}</h2>
                    <p>${textElement}</p>
                </div>
            </div>`
};

function changeToSlide(newIndex){
    document.querySelector('div.carousel.active').classList.remove('active');
    document.querySelector('div.carousel-item[carousel-item="' + newIndex +'"]').classList.add('active');
}