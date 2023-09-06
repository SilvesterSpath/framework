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

  get get() {
    return this.attributes.get;
  }
}
