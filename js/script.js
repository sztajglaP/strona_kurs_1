const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
    nav.classList.toggle('nav--active');

    navItems.forEach(el => {
        el.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        })
    });

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    navItems.forEach(el => {
        el.classList.toggle('nav-items-animation');
        el.style.animationDelay = "." + delayTime + 's';
        delayTime++;
    })
}

burgerBtn.addEventListener('click', handleNav);