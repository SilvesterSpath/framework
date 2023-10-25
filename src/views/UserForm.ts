export class UserForm {
  parent: Element;

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <input type="text" name="name" />
      </div>
    `;
  }
}
