let navBtn = document.querySelector('.nav__btn');
let navMenu = document.querySelector(".nav-menu")


navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('nav__btn--open')
    navMenu.classList.toggle('nav-menu--open')
})


let $ = document
const players = $.querySelectorAll('.fa-play')
const audios = $.querySelectorAll('audio')

let musicName;

players.forEach(function (player) {

    player.addEventListener('click', function (event) {
        musicName = event.target.dataset.name

        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                audio.currentTime = 0
                audio.play()
            } else {
                audio.pause()
            }
        })

    })

})