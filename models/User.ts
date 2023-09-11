import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  // we can't easily swap this, but here is okay, not with Sync
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data);
  }

  // instead of this, we simple return the this.events with get()
  // not calling only returning a reference
  /* on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback)
  } */
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  // with using an additional 'get' we don't need to use parentheses calling get method
  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }
}
