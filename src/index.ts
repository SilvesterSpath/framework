import { User } from '../models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Silvester', age: 22, id: 1 });

const userForm = new UserForm(document.querySelector('#root'), user);

userForm.render();

// Clear cache for Firefox
if ('caches' in window) {
  caches.keys().then((names) => {
    names.forEach((name) => {
      caches.delete(name);
    });
  });
}
