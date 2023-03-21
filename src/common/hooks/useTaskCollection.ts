import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../types/enums';
import { Task } from '../../@core/entities/Task';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: Task[];
  }>('tasks', {
    Backlog: [
      {
        id: uuidv4(),
        column: ColumnType.BACKLOG,
        title: 'Task 1',
        color: 'blue.400',
      },
    ],
    'In Progress': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 2',
        color: 'orange.400',
      },
    ],
    'In Test': [
      {
        id: uuidv4(),
        column: ColumnType.IN_TEST,
        title: 'Task 3',
        color: 'red.400',
      },
    ],
    DONE: [
      {
        id: uuidv4(),
        column: ColumnType.DONE,
        title: 'Task 4',
        color: 'green.400',
      },
    ],
  });
}

export default useTaskCollection;
