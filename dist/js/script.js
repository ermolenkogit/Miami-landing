document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const menuOpen = document.querySelector('.header__menu');
  const nav = document.querySelector('.page__nav');
  const menuClose = document.querySelector('.nav__close-btn');
  const navLink = document.querySelector('.nav__list');

  menuOpen.addEventListener('click', () => {
    nav.removeAttribute('hidden');
    nav.classList.add('page__nav-is-active');
  });

  menuClose.addEventListener('click', () => {
    nav.classList.remove('page__nav-is-active');
  });

  navLink.addEventListener('click', () => {
    nav.classList.remove('page__nav-is-active');
  });

  const form = document.querySelector('.contact-form');
  const inputs = document.querySelectorAll('.contact-form__input');
  const textarea = document.querySelector('.contact-form__textarea');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (const input of inputs) {
      input.value = '';
    }

    textarea.value = '';
  });

  // WEBP support definition function

  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
});