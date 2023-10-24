/* import axios, { AxiosResponse } from 'axios';

axios.get('http://localhost:3000/users').then((res: AxiosResponse) => {
  console.log(res.data);
}); */

import { Collection } from '../models/Collection';
import { User, UserProps } from '../models/User';

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  User.buildUser
);
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
