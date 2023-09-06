import { User } from '../models/User';

const user = new User({ name: 'Silvester', age: 47, id: 3 });
user.attributes.get('name');
user.attributes.get('age');
user.attributes.get('id');

user.sync.save();
