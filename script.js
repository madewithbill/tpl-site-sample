const swiper = new Swiper('.swiper', {
    // Optional parameters
    // autoplay: {
    //     delay: 3000,
    // },
    loop: true,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        addIcons: false,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const recBtn = document.getElementById('recommended-btn')
const latestBtn = document.getElementById('latest-btn')
const recRow = document.getElementById('recommended')
const latestRow = document.getElementById('latest')
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.querySelector('.main-nav-list')

recBtn.addEventListener('click', () => {
    recBtn.classList.add('is-active')
    recRow.classList.add('is-active')
    latestBtn.classList.remove('is-active')
    latestRow.classList.remove('is-active')
})

latestBtn.addEventListener('click', () => {
    latestBtn.classList.add('is-active')
    latestRow.classList.add('is-active')
    recBtn.classList.remove('is-active')
    recRow.classList.remove('is-active')
})

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) {
        mobileMenu.classList.remove('is-open')
        document.body.style.overflowY = 'visible'
    } else {
        mobileMenu.classList.add('is-open')
        document.body.style.overflowY = 'hidden'
    }
})
