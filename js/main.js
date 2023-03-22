// Burger menu
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Fixed header
function fixedNav() {
    const nav = document.querySelector('#header')

    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__header')
    } else {
        nav.classList.remove('fixed__header')
    }
}
window.addEventListener('scroll', fixedNav)

function toggleSubmenu() {
    const trigger = document.querySelector('.with__submenu')
    const header = document.querySelector('.header')
    const submenu = document.querySelector('.submenu')

    trigger.addEventListener('mouseenter', () => {
        submenu.classList.add('active')
        header.classList.add('active')
        trigger.classList.add('active')
    })

    trigger.addEventListener('mouseleave', () => {
        submenu.classList.remove('active')
        header.classList.remove('active')
        trigger.classList.remove('active')
    })
}

toggleSubmenu()
