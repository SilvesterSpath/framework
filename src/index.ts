import { User } from '../models/User';
import { UserForm } from './views/UserForm';

const root = document.querySelector('#root')!;
const user = User.buildUser({ name: 'Silvester', age: 22 });

const userForm = new UserForm(root, user);

userForm.render();

// Clear cache for Firefox
if ('caches' in window) {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
}
