import axios, { AxiosResponse } from 'axios';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

// type aliace
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // quick example
    // this.events['sdfsdfdsf'] = [() => {}];
    this.events[eventName]; // either Callback[] or undefined
    const handlers = this.events[eventName] || []; // in case of undefined we assign an empty array
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    // if handlers undefined or an empty array
    if (!handlers || handlers.length === 0) {
      // return early
      return;
    }

    handlers.forEach((item) => {
      item();
    });
  }

  async fetch(): Promise<void> {
    const res = await axios.get(
      `http://localhost:3000/users/${this.get('id')}`
    );

    this.set(res.data);
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      // put request
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post request
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
