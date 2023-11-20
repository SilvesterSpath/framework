import { View } from './View';
import { User, UserProps } from '../../models/User';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
      <form id="user-form" class="form">
        <input id="user-name" class="input" type="text" placeholder="이름" />
        <input id="user-email" class="input" type="text" placeholder="이메일" />
        <input id="user-password" class="input" type="password" placeholder="<PASSWORD>" />
        <input id="user-password-check" class="input" type="password" placeholder="<PASSWORD>" />
        <button id="user-submit" class="button" type="submit">회원가입</button>
      </form>
    `;
  }
}
