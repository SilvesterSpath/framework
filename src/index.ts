import { User } from '../models/User';

const user = new User({ name: 'Silvester', age: 47 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Szilveszter', age: 40 });

console.log(user.get('name'));
console.log(user.get('age'));
