import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  // hardcode eventing
  events: Eventing = new Eventing();

  // here is <T, K> like <User, UserProps>
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((item: K) => {
        this.models.push(this.deserialize(item));
      });
      this.trigger('change');
    });
  }
}
