interface ModelForView {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends ModelForView> {
  constructor(private parent: Element, public model: T) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  bindEvents(fragment: DocumentFragment): void {
    // get the event map
    const eventsMap = this.eventsMap();
    // get the event keys
    const eventKeys = Object.keys(eventsMap);
    // loop over the event keys
    for (const eventKey of eventKeys) {
      // split the event key into the event type and the event name
      const [eventName, selector] = eventKey.split(':');
      // get the elements that match the event name
      const elements = fragment.querySelectorAll(selector);
      // loop over the elements
      for (const element of elements) {
        // add the event listener
        element.addEventListener(eventName, eventsMap[eventKey]);
      }
    }
  }

  render(): void {
    // create a template element from the template string
    const templateElement = document.createElement('template');
    // set the innerHTML to the template string

    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    /*// get the button element (old way)
    const buttonElement = templateElement.content.querySelector('button');
    // add an event listener to the button
    buttonElement.addEventListener('click', this.onButtonClick); */

    // with append the template will no longer hold the content, counter to appendChild
    this.parent.innerHTML = '';
    this.parent.append(templateElement.content);
  }
}
