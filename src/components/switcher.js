import refs from '../utils/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export default function applyTheme() {
  let currentTheme;
  if (localStorage.getItem('theme')) {
    currentTheme = localStorage.getItem('theme');
    refs.body.classList.add(currentTheme);
    if (localStorage.getItem('theme') === Theme.DARK) {
      refs.switch.checked = true;
    }
  } else {
    currentTheme = localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  }
  return currentTheme;
}

function changeTheme() {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

refs.switch.addEventListener('change', changeTheme);

applyTheme();
