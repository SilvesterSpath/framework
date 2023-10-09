import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  save(data: T): AxiosPromise;
  fetch(id: number): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

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

  set(update: T): void {
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

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((res: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch((err) => {
        this.trigger('error');
      });
  }
}
