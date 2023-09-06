/* import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'Silvester',
  age: 20,
});

const getUser = async () => {
  const user = await axios.get('http://localhost:3000/users/1');
  console.log(user.data);
};

getUser(); */

import { User } from '../models/User';
import { Sync } from '../models/Sync';

const user = new User({ id: 1 });
const sync = new Sync('http://localhost:3000/users');

const id = user.get('id');

sync.fetch(id);

user.set({ name: 'Swx' });
user.set({ age: 40 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');

/* user.fetch();
setTimeout(() => {
  console.log(user);
}, 4000); */
