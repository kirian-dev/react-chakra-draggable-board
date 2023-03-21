import { ColumnType } from '../../common/types/enums';

export interface Task{
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}
