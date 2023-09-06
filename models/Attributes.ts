import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

/* const attrs = new Attributes<UserProps>({ name: 'Silvester', age: 47, id: 3 });

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');

console.log(age); */
