// BOUTON CONNEXION
let boutonConnexion = document.getElementsByClassName('connection3')[0];
let loginContainer = document.getElementById('login-container');
let bodyContainer = document.getElementById('body-container');
console.log(boutonConnexion)
console.log(loginContainer)
console.log(bodyContainer)

boutonConnexion.addEventListener('click', () => {
    loginContainer.style.display = 'block';
    bodyContainer.style.opacity = '0.3';
});

bodyContainer.addEventListener('click', () => {
    loginContainer.style.display = '';
    bodyContainer.style.opacity = '';
});

// CHANGEMENT DE BACKGROUND
let bodyColor = document.getElementsByClassName('emp-body')[0];
let boutonColorBase = document.getElementsByClassName('colorWhite')[0];
let boutonColorNoir = document.getElementsByClassName('colorNoir')[0];
console.log(bodyColor)
console.log(boutonColorBase)
console.log(boutonColorNoir)

let colorNoir = () => {
    bodyColor.style.backgroundColor = 'black'
};
boutonColorNoir.addEventListener('click', colorNoir);

let colorWhite = () => {
    bodyColor.style.backgroundColor = 'white'
};
boutonColorBase.addEventListener('click', colorWhite);

// CAROUSEL

let carousel = document.querySelector('#carousel .row');
console.log(carousel)

let icons = document.querySelectorAll('#carousel i');
console.log(icons)
const moveCarousel = (pos) => {
    carousel.style.transform = `translateX(${-pos*25}%)`;
};

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', () => {
        icons.forEach(element => {
            element.classList.add('far');
            element.classList.remove('fas');
        });
        icons[i].classList.add('fas');
        icons[i].classList.remove('far');
        moveCarousel(i);
    });
};
// carousel.style.transform = 'translateX('+ 2*17 + '%)'

// NAV BAR APPARITION
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop+0;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.remove("sticky2");
    header.classList.add("sticky");
    
  } else if (window.pageYOffset > sticky-150) {
    header.classList.add("sticky2");
  } else {
    header.classList.remove("sticky2");
    header.classList.remove("sticky");
  }
};