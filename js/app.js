// Global Variables
const docSections = document.querySelectorAll('section');
const navList = document.querySelector('#navbar__list');
const navBar = document.querySelector('.navbar');
const main_Hero = document.querySelector('.main__hero');

// build the navBars
const buildNavLinks = () => {
  for (let section of docSections) {
    const navLinkName = section.getAttribute('data-nav');
    const navLi = document.createElement('li');
    navLi.classList.add('navbar__item');
    const navLink = document.createElement('a');
    navLink.classList.add('menu__link');
    navLink.textContent = navLinkName;
    navLink.setAttribute('href', `#${section.id}`);
    navLi.appendChild(navLink);
    navList.appendChild(navLi);
  }
};

// Active Navbar Scrolling

const scrolling = () => {
  const scroll = document.scrollingElement.scrollTop + 200;

  for (let section of docSections) {
    let id = section.id;

    if (scroll >= main_Hero.offsetHeight) {
      if (section.offsetTop <= scroll) {
        if (!document.querySelector('.active')) {
          docSections[0].classList.add('active');
          document.querySelector('.navbar__item').classList.add('active-link');
        }
        document.querySelector('.active-link').classList.remove('active-link');
        document.querySelector('.active').classList.remove('active');
        document
          .querySelector(`a[href*=${id}]`)
          .parentElement.classList.add('active-link');
        document.querySelector(`#${id}`).classList.add('active');
      }
    } else {
      docSections[0].classList.remove('active');
      document.querySelector('.navbar__item').classList.remove('active-link');
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  buildNavLinks();
});
// smooth Scrolling
const smoothScrolling = event => {
  event.preventDefault();
  document.querySelector(event.target.hash).scrollIntoView({
    behavior: 'smooth'
  });
};
navList.addEventListener('click', smoothScrolling);

window.addEventListener('scroll', () => {
  scrolling();
});
