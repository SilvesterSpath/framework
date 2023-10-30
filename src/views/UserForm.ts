export class UserForm {
  constructor(private parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <input type="text" name="name" />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // with append the template will no longer hold the content
    this.parent.append(templateElement.content);
  }
}
