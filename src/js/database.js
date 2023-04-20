import element from './domelement.js';

const lists = [
  {
    user: 'Osman',
    score: 87,
  },
  {
    user: 'Negashu',
    score: 89,
  },
  {
    user: 'Mohammed',
    score: 87,
  },
  {
    user: 'Suleiman',
    score: 98,
  },
  {
    user: 'Jemal',
    score: 90,
  },
];

const span = () => {
  const spanelem = document.createElement('span');
  return spanelem;
};

const item = () => {
  const list = document.createElement('li');
  list.classList.add('leader-view-list');
  return list;
};

const leaderboards = () => {
  lists.forEach((list) => {
    const userspan = span();
    userspan.textContent = list.user;
    const scorespan = span();
    scorespan.textContent = list.score;
    const li = item();
    li.append(userspan, scorespan);
    element.append(li);
  });
};

export default leaderboards;
