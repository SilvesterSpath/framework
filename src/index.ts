import { User } from '../models/User';

const user = new User({});

/* user.set({ name: 'Silvester', age: 30 });

console.log(user.get('name'));
console.log(user.get('age')); */

user.on('change', () => {
  console.log('change');
});

user.on('change', () => {
  console.log('change2');
});

user.on('delete', () => {
  console.log('delete');
});

console.log(user);
