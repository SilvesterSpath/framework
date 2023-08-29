export class Attributes<Type> {
  constructor(private data: Type) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: Type): void {
    Object.assign(this.data, update);
  }
}
