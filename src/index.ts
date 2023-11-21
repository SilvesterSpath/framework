import { User } from '../models/User';
import { UserEdit } from './views/UserEdit';

const root = document.querySelector('#root')!;
const user = User.buildUser({ name: 'Silvester', age: 22 });

const userEdit = new UserEdit(root, user);

userEdit.render();

// Clear cache for Firefox
if ('caches' in window) {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
}
