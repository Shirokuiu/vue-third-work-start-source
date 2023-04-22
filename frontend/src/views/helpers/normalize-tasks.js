import { getStatusTimeFromTask } from "@/views/helpers";

const StatusIdMap = {
  1: "green",
  2: "orange",
  3: "red",
};

export const normalizeTasks = (tasks) => {
  return tasks.map((task) => ({
    ...task,
    statusColor: StatusIdMap[task.statusId],
    statusTime: getStatusTimeFromTask(task.dueDate),
    tags: task.tags
      .split("#")
      .filter(Boolean)
      .map((tag, idx) => ({
        id: idx + 1,
        title: tag,
      })),
  }));
};
