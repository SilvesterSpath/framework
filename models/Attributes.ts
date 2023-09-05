import { UserProps } from './User';

export class Attributes<T extends {}> {
  constructor(private data: T) {}

  get(propName: string): string | number | boolean {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attr = new Attributes<UserProps>({ id: 5, name: 'Silvester', age: 40 });

const id = attr.get('id') as number;

if (typeof id === 'number') {
  id;
}

type BestName = 'silvester';

const printName = (name: BestName): void => {};
