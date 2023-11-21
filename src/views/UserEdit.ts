import { View } from './View';
import { User, UserProps } from '../../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
  // override the regionsmap to define the regions in the view
  regionsMap(): { [key: string]: string } {
    return {
      UserShow: '.user-show',
      UserForm: '.user-form',
    };
  }

  UserShow: UserShow;
  UserForm: UserForm;

  constructor(rootEl: Element, model: User) {
    super(rootEl, model);
    this.UserShow = new UserShow(rootEl, model);
    this.UserForm = new UserForm(rootEl, model);
  }

  template(): string {
    return `
      <div>
        <div class="user-show">${this.UserShow}</div>
        <div class="user-form>${this.UserForm}</div>
      </div>
    `;
  }
}
