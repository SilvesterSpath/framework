import { Model } from '../../models/Model';
import { User, UserProps } from '../../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  constructor(private rootElement: Element, private userModel: User) {
    super(rootElement, userModel);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      /* 'click:button': this.onButtonClick, */
      /* 'mouseenter:h1': this.onHeaderHover */ /*
      'drag:div': this.onDragDiv, */
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('age was set');
  };

  onSetNameClick = (): void => {
    this.model.setRandomName();
    console.log('name was set');
  };

  /*   onButtonClick(): void {
    console.log('first button clicked');
  } */

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
        <button class="set-name">Change name</button>
        <button class="set-age">Random age</button>
      </div>
    `;
  }
}
