import menuList from './components/menu';
import './components/switcher';
import data from './db/menu.json';
import refs from './utils/refs';

menuList(data, refs.menu);
