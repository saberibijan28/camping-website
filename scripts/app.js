let navBtn = document.querySelector('.nav__btn');
let navMenu = document.querySelector(".nav-menu")


navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('nav__btn--open')
    navMenu.classList.toggle('nav-menu--open')
})



let menu = document.querySelectorAll('.menu__item')

for(let i=0; i<menu.length ; i++){
    menu[i].addEventListener('click', function(event){
        for(let j =0; j< menu.length; j++){
            menu[j].classList.remove('menu__link--active')
        }
        event.target.parentElement.classList.add('menu__link--active')
    })
}
