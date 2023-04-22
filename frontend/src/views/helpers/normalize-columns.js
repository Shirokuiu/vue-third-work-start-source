import { normalizeTasks } from "@/views/helpers";

export const normalizeColumns = (columns, tasks) => {
  return columns.map((column) => ({
    ...column,
    tasks: normalizeTasks(tasks).filter(
      ({ columnId }) => columnId === column.id
    ),
  }));
};
