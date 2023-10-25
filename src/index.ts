/* import axios, { AxiosResponse } from 'axios';

axios.get('http://localhost:3000/users').then((res: AxiosResponse) => {
  console.log(res.data);
}); */

import { User } from '../models/User';

/* const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  User.buildUser
);
 */

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
