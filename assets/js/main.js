/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.querySelector('.theme-switch__checkbox');
    const body = document.body;

    // Verifique se o modo escuro está ativado
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Ative o modo escuro se estiver ativado
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Adicione um ouvinte de evento ao interruptor de tema
    themeSwitch.addEventListener('change', function () {
        // Alternar entre os modos claro e escuro
        body.classList.toggle('dark-mode');

        // Salvar o estado atual do modo escuro no armazenamento local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });
});

const CITY = document.getElementById('city');
const TEMPERATURE = document.getElementById('temperature');
const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const UNITS = 'metric';

navigator.geolocation.getCurrentPosition(loadUrl);

function loadUrl(pos) {
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
  let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
  fetchApi(url);
};

async function fetchApi(url) {
  let response = await fetch(url);
  let { main, name } = await response.json();
  let temperature = (main.temp).toFixed(1);
  CITY.innerText = `${name}:`;
  TEMPERATURE.innerText = `${temperature} ºC`;
}
alert("Bem-Vindo ao Meu Portfólio Olá a todos!É um prazer recebê-los no meu espaço digital, onde compartilho o resultado da minha jornada na programação. Meu nome é Brendon Rogério Bernardi, tenho 16 anos e sou apaixonado por explorar o mundo da tecnologia");
