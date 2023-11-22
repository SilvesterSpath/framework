import { CollectionView } from './CollectionView';
import { User, UserProps } from './User';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, parent: Element): void {}
}
