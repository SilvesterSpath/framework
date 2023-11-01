import { User } from '../models/User';

const user = User.buildUser({ id: 3 });

/* user.attributes.get('name');
user.attributes.get('age');
user.attributes.get('id'); */

/* // Before..
user.save() */

// A quick reminder on accessors

/* class Person {
  constructor(public firstName: s tring, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('firstname', 'lastname');
console.log(person.fullName); */

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
  console.log(user);
});

user.fetch();
user.isAdminUser();

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
