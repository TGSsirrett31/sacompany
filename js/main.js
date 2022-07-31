window.onscroll = function() {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll > 20){
        header.classList.add('nav__mod')
    } else if(scroll < 20){
        header.classList.remove('nav__mod')
    }
}

document.getElementById('btn_menu').addEventListener('click', mostrar__menu)
menu = document.getElementById('header');
body = document.getElementById('body')
nav = document.getElementById('nav');

function mostrar__menu () {

    menu.classList.toggle('move__content')
    body.classList.toggle('move__content')
    nav.classList.toggle('move__nav')

}

window.addEventListener('resize', function() {
    if(window.innerWidth > 760){
        menu.classList.remove('move__content')
        body.classList.remove('move__content')
        nav.classList.remove('move__nav')
    }
})