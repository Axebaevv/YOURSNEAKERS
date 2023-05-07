'use strickt';

const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const navItems = document.querySelector('.nav-items');
const iconsAccount = document.querySelector('.nav-icons-account');
const loginWrapper = document.querySelector('.login-wrapper');
const navSearchItem = document.querySelector('.nav-search-item');
const searchIcon = document.querySelector('.nav-search-item a');

hamburger.addEventListener('click', () => {
  navItems.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  navItems.classList.remove('active');
});

iconsAccount.addEventListener('click', () => {
  loginWrapper.classList.toggle('active');
  navSearchItem.classList.remove('active');
});

searchIcon.addEventListener('click', () => {
  navSearchItem.classList.toggle('active');
  loginWrapper.classList.remove('active');
});
