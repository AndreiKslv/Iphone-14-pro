const btn = document.querySelector('.header__menu-btn');
const div = document.querySelector('.header__inner');

btn.addEventListener('click', () => {
	div.classList.toggle('menu-open')
});