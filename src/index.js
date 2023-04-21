import './assets/title.png';
import './assets/style.css';
import { createvent, getleaders } from './js/database.js';
import creategameid from './js/game.js';

const start = () => {
  creategameid();
  getleaders();
  createvent();
};
start();
