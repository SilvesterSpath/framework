import { User } from '../../models/User';

export class UserForm {
  constructor(private parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      /* 'click:button': this.onButtonClick, */
      /* 'mouseenter:h1': this.onHeaderHover */ /*
      'drag:div': this.onDragDiv, */
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('age was set');
  };

  onButtonClick(): void {
    console.log('first button clicked');
  }

  onHeaderHover(): void {
    console.log('hovered over the header');
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input type="text" name="name" />
        <button>Click Me!</button>
        <button class="set-age">Random age</button>
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
