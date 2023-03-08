const menuHamburguer = document.querySelector(".material-symbols-outlined")
const menuNav = document.querySelector(".nav-menu")

function toggleMenu(){
    if(menuNav.classList.contains('show-menu')) {
        menuNav.classList.remove('show-menu');
    } else {
        menuNav.classList.add('show-menu')
    }
}

menuHamburguer.addEventListener("click", toggleMenu);