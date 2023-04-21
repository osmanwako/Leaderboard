import { addr, isgameid } from './address.js';

const creategameid = async () => {
  if (!isgameid()) {
    const name = { name: 'osmanwako' };
    await fetch(addr(), {
      method: 'POST',
      body: JSON.stringify(name),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(async (resp) => {
        const data = await resp.json();
        const arr = data.result.split(' ');
        localStorage.setItem('gameid', arr[3]);
      })
      .catch((Error) => {
        throw new Error('Something went wrong!');
      });
  }
};

export default creategameid;
