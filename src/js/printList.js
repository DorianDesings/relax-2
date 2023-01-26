import { THEMES } from './constants.js';

const listElement = document.getElementById('list-container');

const printList = theme => {
  listElement.innerHTML = '';
  if (theme === 'default') return;
  const fragment = document.createDocumentFragment();
  THEMES[theme].forEach(item => {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    fragment.append(newItem);
  });
  listElement.append(fragment);
};

export { printList };
