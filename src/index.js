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

const body = document.querySelector('body');
const themeToggle = document.querySelector('#theme-switch-toggle');
themeToggle.addEventListener('change', changeTheme);

function changeTheme() {
  if (body.classList.toggle(theme.DARK)) {
    return;
  }
}
