import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
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
