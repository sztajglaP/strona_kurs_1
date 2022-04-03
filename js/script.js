const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav--active');
    navBtnBars.classList.toggle('black-bars-color');

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

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.textContent = year;
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color');
        } else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color');
        }

    })
}

handleCurrentYear();
burgerBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);