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
      'click:.save-model': this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
    console.log('model was saved');
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
        <input placeholder="${this.model.get(
          'name'
        )}" type="text" name="name" />
        <button class="set-name">Change name</button>
        <button class="set-age">Random age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
