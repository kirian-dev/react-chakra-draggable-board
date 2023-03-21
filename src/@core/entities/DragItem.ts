import { ColumnType } from '../../common/types/enums';
import { Task } from './Task';

export interface DragItem {
  index: number;
  id: Task['id'];
  from: ColumnType;
}
