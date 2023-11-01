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

  render(): void {
    // create a template element from the template string
    const templateElement = document.createElement('template');
    // set the innerHTML to the template string
    templateElement.innerHTML = this.template();

    // get the button element
    const buttonElement = templateElement.content.querySelector('button');
    // add an event listener to the button
    buttonElement.addEventListener('click', this.onButtonClick);

    // with append the template will no longer hold the content, counter to appendChild
    this.parent.append(templateElement.content);
  }
}
