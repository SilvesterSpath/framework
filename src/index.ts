import { User } from '../models/User';
import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { UserShow } from './views/UserShow';

const root = document.querySelector('#root')!;
const user = User.buildUser({ name: 'Silvester', age: 22 });

const userEdit = new UserEdit(root, user);

console.log(userEdit);

userEdit.render();

// Clear cache for Firefox
if ('caches' in window) {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
}
