import { Collection } from '../../models/Collection';

// in this generic class we are going to specify the type of the model and the properties that will have
export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const template = document.createElement('template');

    this.collection.models.forEach((model: T) => {
      const itemParent = document.createElement('div');
      itemParent.classList.add('collection-item');
      this.renderItem(model, itemParent);
      template.content.append(itemParent);
    });

    this.parent.append(template.content);
  }
}
