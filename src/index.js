import './styles.css';
import menuObj from './menu.json';
import template from './template.hbs';

const list = document.querySelector('.menu');
const renderMarkup = createMarkup(menuObj);
const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createMarkup(menuObj) {
  return menuObj.map(template).join('');
}

list.insertAdjacentHTML('beforeend', renderMarkup);

checkBox.addEventListener('change', checkTheme);

function checkTheme(e) {
  if (e.target.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('THEME', Theme.DARK);
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('THEME', Theme.LIGHT);
  }
}

let CurrentTheme = localStorage.getItem('THEME');
if (CurrentTheme === 'light-theme') {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  checkBox.checked = false;
} else {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  checkBox.checked = true;
}
