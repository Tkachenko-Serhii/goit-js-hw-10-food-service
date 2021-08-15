import foodItemTpl from './templates/food-item.hbs';
import menu from './menu.json';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const foodMemu = document.querySelector('.js-menu');
const cardsMarkup = createFoodItemMurkup(menu);

foodMemu.insertAdjacentHTML('beforeend', cardsMarkup);

function createFoodItemMurkup(menu) {
  return foodItemTpl(menu);
}

const themeToggle = document.getElementById('theme-switch-toggle');

themeToggle.addEventListener('change', changeTheme);
themeToggle.addEventListener('click', addToLocalStorage);

savedTheme();

function changeTheme() {
  if (document.body.classList.toggle(theme.DARK)) {
    return;
  }
}

function addToLocalStorage() {
  if (themeToggle.checked) {
    localStorage.setItem('theme', theme.DARK);
  } else {
    localStorage.setItem('theme', theme.LIGHT);
  }
}

function savedTheme() {
  const themeInLocalStorage = localStorage.getItem('theme');

  if (themeInLocalStorage) {
    document.body.classList.add(themeInLocalStorage);
    if (themeInLocalStorage === theme.DARK) {
      themeToggle.checked = true;
    }
  }
}
