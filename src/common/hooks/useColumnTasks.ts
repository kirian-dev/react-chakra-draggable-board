import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../@core/entities/Task';
import { ColumnType } from '../types/enums';
import { pickChakraRandomColor, swap } from '../utils/helpers';
import useTaskCollection from './useTaskCollection';

const MAX_TASK_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();
  const columnTasks = tasks[column];

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > MAX_TASK_PER_COLUMN) {
        return allTasks;
      }

      const newColumnTask: Task = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: pickChakraRandomColor('.300'),
        column,
      };

      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);

  const deleteTask = useCallback(
    (id: Task['id']) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const updateTask = useCallback(
    (id: Task['id'], updatedTask: Omit<Partial<Task>, 'id'>) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task: Task) => (task.id === id ? { ...task, ...updatedTask } : task)),
        };
      });
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (from: ColumnType, id: Task['id']) => {
      setTasks((allTasks) => {
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task: Task) => task.id === id);

        if (!movingTask) {
          return allTasks;
        }

        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTasks],
        };
      });
    },
    [column, setTasks]
  );

  const swapTasks = useCallback(
    (i: number, j: number) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: columnTasks,
    addEmptyTask,
    updateTask,
    dropTaskFrom,
    deleteTask,
    swapTasks,
  };
}

export default useColumnTasks;
