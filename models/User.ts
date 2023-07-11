export interface UserProps {
  name?: string;
  age?: number;
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
}
