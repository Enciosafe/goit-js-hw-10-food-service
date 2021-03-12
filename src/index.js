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

const changeTheme = (del, add) => {
  body.classList.remove(del);
  body.classList.add(add);
};

function checkTheme(e) {
  if (e.target.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('THEME', Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('THEME', Theme.LIGHT);
  }
}

let CurrentTheme = localStorage.getItem('THEME');
if (CurrentTheme === Theme.LIGHT) {
  changeTheme(Theme.DARK, Theme.LIGHT);
  checkBox.checked = false;
} else {
  changeTheme(Theme.LIGHT, Theme.DARK);
  checkBox.checked = true;
}
