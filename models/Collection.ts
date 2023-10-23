import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { User, UserProps } from './User';

export class Collection {
  models: User[] = [];
  // hardcode eventing
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((item: UserProps) => {
        this.models.push(User.buildUser(item));
      });
      this.trigger('change');
    });
  }
}
