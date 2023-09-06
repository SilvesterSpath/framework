import { User } from '../models/User';

const user = new User({ name: 'Silvester', age: 47, id: 3 });

/* user.attributes.get('name');
user.attributes.get('age');
user.attributes.get('id'); */

/* // Before..
user.save() */

// A quick reminder on accessors

/* class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('firstname', 'lastname');
console.log(person.fullName); */

user.on('change', () => {
  console.log('change');
});
