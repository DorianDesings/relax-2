// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { printList } from './printList';

const themesSelectElement = document.getElementById('themes');

themesSelectElement.addEventListener('change', e => printList(e.target.value));
