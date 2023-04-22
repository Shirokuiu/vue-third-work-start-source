import { differenceInDays, parseISO } from "date-fns";

const TimeStatus = {
  Alert: "alert",
  Time: "time",
};

const TODAY_DAY_NUM = 0;
const NOT_DEADLINE_DAY_NUM = 4;

export const getStatusTimeFromTask = (dueDate) => {
  if (!dueDate) {
    return undefined;
  }

  const delta = differenceInDays(parseISO(dueDate), new Date());

  if (delta < TODAY_DAY_NUM) {
    return TimeStatus.Alert;
  }

  if (delta >= TODAY_DAY_NUM && delta < NOT_DEADLINE_DAY_NUM) {
    return TimeStatus.Time;
  }
};
