const menuHamburguer = document.querySelector(".material-symbols-outlined");
const menuNav = document.querySelector(".nav-menu");

function toggleMenu(){
    if(menuNav.classList.contains('show-menu')) {
        menuNav.classList.remove('show-menu');
    } else {
        menuNav.classList.add('show-menu');
    }
}
menuHamburguer.addEventListener("click", toggleMenu);


/* TIRAR DUVIDA
const setas = document.querySelector(".dropdown-icon");
const respostas = document.querySelector(".resposta");

function dropDown() {
    if(respostas.classList.contains('resposta-dropped')) {
       respostas.classList.remove('resposta-dropped');
    } else {
        this.classList.add('resposta-dropped');
    }
}

setas.forEach((elemento) => {
    elemento.addEventListener("click", dropDown);
})
*/
