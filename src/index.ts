import { UserList } from './views/UserList';
import { Collection } from '../models/Collection';
import { User, UserProps } from '../models/User';

const root = document.querySelector('#root')!;
const rootUrl = 'http://localhost:3000/users';

const users = new Collection(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

// first I need to register the 'change' handler
users.on('change', () => {
  userList.render();
  console.log(users.models);
});

// users.fetch();
users.fetch();

const userList = new UserList(root, users);
