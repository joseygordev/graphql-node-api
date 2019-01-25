import * as DataLoader from 'dataloader';
import { UserInstance } from '../models/UserModel';
import { PostInstance } from '../models/PostModel';

export interface DataLoaders {
  userLoader: DataLoader<number, UserInstance>;
  postLoader: DataLoader<number, PostInstance>;
}