export class UserForm {
  constructor(private parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      /* 'hover:h1': this.onHoverHeader,
      'drag:div': this.onDragDiv, */
    };
  }

  onButtonClick(): void {
    console.log('first button clicked');
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <input type="text" name="name" />
        <button>Click Me!</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    // get the event map
    const eventsMap = this.eventsMap();
    // get the event keys
    const eventKeys = Object.keys(eventsMap);
    // loop over the event keys
    for (const eventKey of eventKeys) {
      // split the event key into the event type and the event name
      const [eventType, eventName] = eventKey.split(':');
      // get the elements that match the event name
      const elements = fragment.querySelectorAll(
        `[${eventType}="${eventName}"]`
      );
      // loop over the elements
      for (const element of elements) {
        // add the event listener
        element.addEventListener(eventType, eventsMap[eventKey]);
      }
    }
  }

  render(): void {
    // create a template element from the template string
    const templateElement = document.createElement('template');
    // set the innerHTML to the template string
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    // get the button element
    const buttonElement = templateElement.content.querySelector('button');
    // add an event listener to the button
    buttonElement.addEventListener('click', this.onButtonClick);

    // with append the template will no longer hold the content, counter to appendChild
    this.parent.append(templateElement.content);
  }
}
