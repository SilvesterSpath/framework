import { Collection } from './Collection';
import { Model } from './Model';

export abstract class CollectionView<T extends Model<K>, K> {
  constructor(public collection: Collection<T, K>) {}

  render(): void {}

  abstract renderItem(model: T, parent: Element): void;
}
