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

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

user.set({ name: 'Brad' });

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
