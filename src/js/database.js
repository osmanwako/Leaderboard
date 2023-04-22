import {
  element,
  addform,
  successmessage,
  refreshbutton,
} from './domelement.js';
import { baseUrl, gameid } from './address.js';

const url = `${baseUrl()}games/${gameid}/scores/`;

const insertdata = async (user, score) => {
  const player = { score, user };
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      const data = await response.json();
      successmessage.textContent = data.result;
    })
    .catch((error) => {
      successmessage.textContent = 'Fail. Please try again.';
      throw error('Something is wrong');
    });
};

const formlisten = (event) => {
  event.preventDefault();
  const formdata = event.target.elements;
  const { urscore, urname } = formdata;
  insertdata(urname.value, urscore.value);
  addform.reset();
};

const span = () => {
  const spanelem = document.createElement('span');
  return spanelem;
};

const item = () => {
  const list = document.createElement('li');
  list.classList.add('leader-view-list');
  return list;
};

const leaderboards = (lists) => {
  element.innerHTML = '';
  lists.forEach((list, i) => {
    if (typeof list.score === 'string' && typeof list.user === 'string') {
      const listno = span();
      listno.className = 'listn-no';
      listno.textContent = `${i + 1}`;
      const userspan = span();
      userspan.textContent = list.user;
      const usercontain = span();
      usercontain.append(listno, userspan);
      const scorespan = span();
      scorespan.textContent = list.score;
      const li = item();
      li.append(usercontain, scorespan);
      element.append(li);
    }
  });
};

const reject = () => {
  const li = item();
  element.innerHTML = '';
  li.textContent = 'Fail to load. try again';
  element.prepend(li);
};
export const getleaders = async () => {
  await fetch(url)
    .then(async (response) => {
      const data = await response.json();
      leaderboards(data.result);
    })
    .catch((error) => {
      reject(error);
      throw new Error('Something went wrong!');
    });
};

export const createvent = () => {
  addform.addEventListener('submit', formlisten);
  refreshbutton.addEventListener('click', getleaders);
};
