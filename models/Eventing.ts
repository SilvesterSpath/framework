// type aliace
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
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
}
