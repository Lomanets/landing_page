'use strict'

document.querySelector('.header-offer__button').addEventListener('click', () => {
    document.querySelector('.header-module').style.display = 'block';
    document.querySelector('.header-module__form').classList.add('header-module__animate');
});
