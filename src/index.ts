import { User } from '../models/User';

const user = User.buildUser({ name: 'Silvester', age: 34, id: 23 });
user.get('id');
user.get('name');
user.get('age');
user.fetch();

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

user.on('save', () => {
  console.log('User was changed, we probably need to update some HTML');
  console.log(user);
});

user.save();

// Reminder on how 'this' works in JS
/* const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  },
};

colors.printColor();

const { printColor } = colors;
printColor(); */
